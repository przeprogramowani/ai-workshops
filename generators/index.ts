import OpenAI from 'openai';
import fs from 'fs';
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_PLATFORM_KEY,
});

console.log('Tworzę plik json z komentarzami użytkowników gier online...');

const comments = await openai.chat.completions.create({
  model: 'gpt-4-1106-preview',
  temperature: 0.8,
  response_format: { type: 'json_object' },
  messages: [
    {
        role: 'user',
        content: `
            Wygeneruj plik json, który zawiera 25 komentarzy użytkownikow gier online w stylu kasyno.

            W grze można rozgrywać pojedynki z innymi graczami, a także z komputerem.
            Potencjalne gry to np. sloty, ruletka, poker, black jack, szachy, warcaby, monopoly, scrabble, kółko i krzyżyk, itp.
            
            Komentarze powinny być w języku polskim, a ich tematyka powinna dotyczyć jednej z trzech kategorii:
            - poziomu zaangażowania użytkowników
            - interfejsu i zrozumienia reguł gry
            - personalizacji doświadczeń i możliwości dostosowania gry do siebie

            Spraw, aby komentarze były neutralne lub krytyczne i nie powtarzały się.

            Komentarze powinny być udzielane w okresie od października do grudnia 2023.
            Komentarze są grupowane wg jednej z trzech kategorii - interfejs_rozgrywka, poradniki_support, problemy_techniczne

            Powinien być widoczny spadek ocen wraz z upływem czasu.

            Chciałbym, aby każdy komentarz miał takie pola:
            - data_dodania
            - autor (fikcyjne imie i nazwisko lub fallback jako "anonim")
            - komentarz
            - ocena (od 1 do 5 gwiazdek)
            - reputacja_autora (od 1 do 5 gwiazdek)
            - kategoria - "interfejs_rozgrywka" lub "poradniki_support" lub "problemy_techniczne"
            - platforma - mobile_ios, mobile_android, web

            Zwróć odpowiedź w formacie json w tablicy "komentarze"
        
        `
    }
  ],
});

fs.writeFileSync(`data-new-${new Date().getTime()}.json`, comments!.choices[0]!.message!.content!, 'utf8');

