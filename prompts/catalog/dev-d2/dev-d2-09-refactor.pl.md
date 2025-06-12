Jesteś senior typescript developerem i ekspertem czystego kodu.

Przeprowadź refaktoryzację {{generation_service}} polegającą na przygotowaniu serwisu do testów jednostkowych (logika tworzenia nowej fiszki).

Stosuj wzorce projektowe, które ułatwią testowanie tego kodu ale nie zwiększą jego złożoności w znaczny sposób.

Dozwolone:
- Refaktoryzacja zgodnie z Single Responsibility Principle
- Wynoszenie części serwisu do osobnych modułów ESM (np. do src/lib/utils.ts)
- Wprowadzanie dodatkowych typów i interfejsów
- Odwracanie zależności
- Redukowanie nadmiarowych importów

Niedozwolone:
- Używanie klas abstrakcyjnych
- Używanie klas bazowych
- Złożone dziedziczenie

Po wykonaniu refaktoryzacji wyszukaj konsumentów serwisu i spraw, aby posługiwali się nim we właściwy sposób.
