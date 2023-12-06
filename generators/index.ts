import OpenAI from 'openai';
import fs from 'fs';
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_PLATFORM_KEY,
});


for (let i = 0; i < 4; i++) {
console.log(`${i+1}: Tworzę plik json z komentarzami użytkowników gier online...`);
const comments = await openai.chat.completions.create({
  model: 'gpt-4-1106-preview',
  temperature: 0.8,
  response_format: { type: 'json_object' },
  messages: [
    {
        role: 'user',
        content: `
        Wygeneruj plik json zawierający 25 komentarzy użytkowników gry online w stylu kasyna o nazwie Huuuge Casino.

        Opis gry:
        "Witamy w ekscytującym świecie Huuuge Slots - miejscu docelowym gier społecznościowych i aplikacji kasyna online z najlepszym wyborem 777 slotów, automatów z jackpotami i wielu innych! Wkrocz do świata gier kasynowych!

        Doświadcz blasku gier kasynowych Las Vegas na wyciągnięcie ręki i dołącz do grona szczęśliwych entuzjastów automatów w kasynie online Huuuge 2023. Najlepsze klasyczne gry na automatach są tuż za rogiem! Ciesz się wspaniałym wyborem naszych gier slotowych, takich jak Bars and Sevens 777, Classic Diamonds, 777 of Fortune, Classit Fruits, Triple Chance Jackpots 777 i wiele innych".

        W Huuuge Casino można rozgrywać pojedynki z innymi graczami, a także z komputerem.

        6 listopada pojawiła się ważna aktualizacja: Huuuge Casino 2.0. Po trzech kwartałach cała platforma została przepisana z C++ i Java na Rust, co doprowadziło do znacznie lepszej wydajności i mniejszej liczby błędów. Jednak nie wszystkie funkcje były dostępne w nowej wersji po wydaniu, ponieważ są one nadal rozwijane i planowane na 2024 rok. Najważniejsze brakujące kategorie funkcji to:
        1. **Engagement** - Mało wciągająca rozgrywka / Mała liczba gier / Mała różnorodność gier.
        2. **Wellbeing** - Brak kontroli wydatków, popadanie w uzależnienie, frustrujący interfejs, dźwięki i powiadomienia.
        3 **Social** - Brak możliwości grania ze znajomymi lub poznawania innych graczy.

        Komentarze powinny być w języku polskim. Chciałbym, aby każdy komentarz miał takie pola:
        - data_dodania
        - autor (fikcyjna nazwa lub awaryjnie "anonimowy")
        - komentarz
        - ocena (od 1 do 10 gwiazdek)
        - autor_reputacja (od 1 do 5 gwiazdek)
        - kategoria
        - platforma - mobile_ios, mobile_android, web

        Komentarze powinny mieć datę dodania między 6 października 2023 r. a 6 grudniem 2023 r.

        6 października 2023 i 5 listopada następującego sentymentu:
        1. negatywne = 20% komentarzy wspominających o wydajności i losowych błędach
        2. neutralny = 20% komentarzy
        3. pozytywne = 60% komentarzy

        6 listopada 2023 r. (po premierze) i 6 grudnia następującego sentymentu:
        1. negatywne = 60% komentarzy wspominających o problemach w zaangażowaniu, dobrym samopoczuciu i rozrywce społecznościowej
        2. neutralne = 20% komentarzy
        3. pozytywny = 20% komentarzy wspominających o poprawie wydajności, stabilności platformy i braku przypadkowych błędów

        Dla każdego sentymentu zakres ocen powinien być następujący:
        1. negatywny - ocena od 1 do 4
        2. neutralny - ocena od 5 do 7
        3. pozytywny - ocena od 8 do 10

        Po 6 listopada 2023 r. powinien być widoczny wyraźny spadek ocen i sentymentu w komentarzach. Komentarzy powinno być co najmniej 25 a najlepiej ponad 50.
        `
    }
  ],
});

fs.writeFileSync(`data-new-${new Date().getTime()}.json`, comments!.choices[0]!.message!.content!, 'utf8');
}
