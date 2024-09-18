# Cart Component Documentation

## Table of Contents

1. Introduction
2. Components
   2.1. Cart
   2.2. CartButton
3. Store
   3.1. cartStore
4. Styling
5. Testing
   5.1. Cart.test.jsx
6. Usage
7. Best Practices
8. Future Improvements

## 1. Introduction

System koszyka jest kluczowym elementem naszej aplikacji e-commerce. Umożliwia użytkownikom dodawanie produktów do koszyka, przeglądanie zawartości koszyka oraz usuwanie produktów. System składa się z komponentów React, store'a Nano Stores, stylów SCSS oraz testów jednostkowych.

## 2. Components

### 2.1. Cart

Komponent `Cart` wyświetla przycisk koszyka z liczbą przedmiotów oraz rozwijane menu z listą produktów w koszyku.

Funkcjonalności:

- Wyświetlanie liczby przedmiotów w koszyku
- Rozwijane menu z listą produktów
- Możliwość usuwania produktów z koszyka
- Wyświetlanie sumy cen produktów

Props: Brak (korzysta z globalnego store'a)

Kluczowe elementy implementacji:

- Wykorzystuje `useStore` z `@nanostores/react` do obserwowania zmian w `cartItems`
- Używa komponentu `Button` do renderowania przycisku koszyka i przycisków usuwania
- Oblicza sumę przedmiotów i całkowitą cenę na podstawie zawartości koszyka

### 2.2. CartButton

Komponent `CartButton` to przycisk umożliwiający dodawanie lub usuwanie pojedynczego produktu z koszyka.

Funkcjonalności:

- Dodawanie produktu do koszyka
- Usuwanie produktu z koszyka
- Zmiana tekstu przycisku w zależności od stanu (w koszyku / poza koszykiem)

Props:

- `product`: obiekt zawierający informacje o produkcie
  - `id` (number, required): unikalny identyfikator produktu
  - `title` (string, required): nazwa produktu
  - `price` (number, required): cena produktu
  - `thumbnail` (string, optional): URL miniatury produktu

Kluczowe elementy implementacji:

- Wykorzystuje `useStore` do śledzenia stanu koszyka
- Używa komponentu `Button` do renderowania
- Wywołuje odpowiednie funkcje z `cartStore` w zależności od akcji użytkownika

## 3. Store

### 3.1. cartStore

`cartStore` to globalny store zarządzający stanem koszyka, wykorzystujący Nano Stores.

Funkcje:

- `addToCart(product)`: dodaje produkt do koszyka
- `removeFromCart(productId)`: usuwa produkt z koszyka
- `cartItems`: persistentMap przechowujący produkty w koszyku

Implementacja:

- Wykorzystuje `persistentMap` do zachowania stanu koszyka między sesjami
- Używa `atom` do zarządzania stanem otwarcia/zamknięcia koszyka

## 4. Styling

Styl komponentu `Cart` jest zdefiniowany w pliku `Cart.module.scss`. Kluczowe cechy:

- Responsywny design z użyciem zmiennych CSS dla spójności
- Stylizacja przycisku koszyka, rozwijanego menu i elementów listy
- Użycie flexbox do układu elementów
- Animacje przejść dla lepszego UX

## 5. Testing

### 5.1. Cart.test.jsx

Testy jednostkowe dla komponentu Cart, sprawdzające:

- Poprawne renderowanie przycisku koszyka z liczbą przedmiotów
- Otwieranie i zamykanie rozwijanego menu
- Wyświetlanie poprawnych przedmiotów w koszyku
- Obliczanie i wyświetlanie poprawnej sumy cen
- Usuwanie przedmiotów z koszyka
- Aktualizację koszyka przy zmianie store'a

Implementacja:

- Wykorzystuje `@testing-library/react` do renderowania i interakcji z komponentem
- Mockuje `@nanostores/react` i `cartStore` dla izolacji testów
- Używa `vitest` jako frameworka testowego

## 6. Usage

Przykład użycia komponentu Cart:

```jsx
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <header>
        <Cart />
      </header>
      {/* reszta aplikacji */}
    </div>
  );
}
```

Przykład użycia komponentu CartButton:

```jsx
import CartButton from "./components/CartButton";

function ProductCard({product}) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      <CartButton product={product} />
    </div>
  );
}
```

## 7. Best Practices

- Używaj komponentu Cart w głównym layoucie aplikacji, najlepiej w headerze
- Komponent CartButton powinien być używany na stronach produktów lub w listach produktów

## 8. Future Improvements

- Dodanie możliwości zmiany ilości produktów w koszyku
- Implementacja procesu checkout
- Rozważenie innych opcji persystencji koszyka (np. IndexedDB dla większych ilości danych)
- Dodanie animacji przy dodawaniu/usuwaniu produktów z koszyka
- Implementacja systemu rabatów i kodów promocyjnych
- Dodanie obsługi różnych walut i lokalizacji
- Implementacja systemu rekomendacji produktów w koszyku
