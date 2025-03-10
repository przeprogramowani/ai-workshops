Przeanalizuj poniższy ticket dotyczący aplikacji do tworzenia fiszek w #codebase. Twoim zadaniem jest:

- Dokładnie zidentyfikować problem – określ, na czym polega błąd, jakie są konsekwencje dla użytkowników oraz jakie nieprawidłowości w działaniu aplikacji powoduje.
- Zasugerować potencjalne rozwiązanie – opisz, jakie kroki walidacyjne (zarówno po stronie klienta, jak i serwera) mogłyby zapobiec zapisywaniu pustych fiszek. Uwzględnij, że rozwiązanie powinno również wyświetlać komunikat informujący użytkownika o konieczności uzupełnienia wymaganych pól.
- Nie implementuj kodu – podaj jedynie dokładne sugestie, które mogą pomóc w usunięciu zgłoszonego błędu.

Ticket #41: Błąd pozwalający na tworzenie pustych fiszek

Priorytet: Wysoki
Status: Otwarty
Kategoria: Błąd aplikacji
Zgłoszony przez: Anna Nowak (anna.nowak@email.com)
Data zgłoszenia: 09.03.2025, 09:45

Opis problemu:
Użytkownik zgłasza, że aplikacja pozwala na utworzenie i zapisanie pustej fiszki – bez pytania, bez odpowiedzi lub obu. Takie fiszki powodują problemy podczas nauki, ponieważ pojawiają się puste ekrany lub wyświetlany jest tylko jeden z elementów (tylko pytanie lub tylko odpowiedź).

Kroki do reprodukcji:

- Przejdź do opcji "Utwórz nową fiszkę"
- Pozostaw pole "Pytanie" puste
- Opcjonalnie: wpisz odpowiedź lub pozostaw także to pole puste
- Kliknij przycisk "Zapisz"
- System zapisuje fiszkę pomimo braku treści w wymaganych polach

Informacje dodatkowe:

- Problem występuje we wszystkich poziomach trudności.
- Puste fiszki zaburzają proces nauki, powodując wyświetlanie pustych ekranów lub fragmentarycznych treści.
- Użytkownik musi ręcznie usuwać puste fiszki.
- Brak walidacji formularza informującej o konieczności uzupełnienia pól.

Proponowane rozwiązanie:

- Dodanie walidacji po stronie klienta i serwera, która uniemożliwi zapisanie fiszki bez wypełnienia pól 'pytania' i 'odpowiedzi' oraz wyświetli odpowiedni komunikat dla użytkownika.

Na podstawie powyższych informacji, zidentyfikuj główną przyczynę błędu oraz opisz potencjalne podejście do jego rozwiązania. Nie implementuj zmian bez mojej zgody.
