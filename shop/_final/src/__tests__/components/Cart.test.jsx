import {useStore} from "@nanostores/react";
import {fireEvent, render, screen} from "@testing-library/react";
import {beforeEach, describe, expect, it, vi} from "vitest";
import Cart from "../../components/Cart";
import {cartItems, removeFromCart} from "../../stores/cartStore";

// Mock the nanostores/react hook
vi.mock("@nanostores/react", () => ({
  useStore: vi.fn(() => ({})),
}));

// Mock the cartStore
vi.mock("../../stores/cartStore", () => ({
  cartItems: {},
  removeFromCart: vi.fn(),
}));

describe("Cart", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders Cart button with correct number of items", () => {
    const mockCartItems = {1: {id: 1, title: "Item 1", price: 10}};
    vi.mocked(useStore).mockReturnValue(mockCartItems);

    render(<Cart />);
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  });

  it("opens and closes dropdown when Cart button is clicked", () => {
    vi.mocked(useStore).mockReturnValue({});
    render(<Cart />);
    const cartButton = screen.getByText("Cart (0)");

    fireEvent.click(cartButton);
    expect(screen.getByText("Total: $0.00")).toBeInTheDocument();

    fireEvent.click(cartButton);
    expect(screen.queryByText("Total: $0.00")).not.toBeInTheDocument();
  });

  it("displays correct cart items when dropdown is open", () => {
    const mockCartItems = {
      1: {id: 1, title: "Item 1", price: 10, thumbnail: "thumb1.jpg"},
      2: {id: 2, title: "Item 2", price: 20, thumbnail: "thumb2.jpg"},
    };
    vi.mocked(useStore).mockReturnValue(mockCartItems);

    render(<Cart />);
    fireEvent.click(screen.getByText("Cart (2)"));

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
  });

  it("calculates and displays correct total price", () => {
    const mockCartItems = {
      1: {id: 1, title: "Item 1", price: 10},
      2: {id: 2, title: "Item 2", price: 20},
    };
    vi.mocked(useStore).mockReturnValue(mockCartItems);

    render(<Cart />);
    fireEvent.click(screen.getByText("Cart (2)"));

    expect(screen.getByText("Total: $30.00")).toBeInTheDocument();
  });

  it("removes item from cart when Remove button is clicked", () => {
    const mockCartItems = {
      1: {id: 1, title: "Item 1", price: 10},
    };
    vi.mocked(useStore).mockReturnValue(mockCartItems);

    render(<Cart />);
    fireEvent.click(screen.getByText("Cart (1)"));
    fireEvent.click(screen.getByText("Remove"));

    expect(removeFromCart).toHaveBeenCalledWith(1);
  });

  it("updates cart when store changes", () => {
    const initialCartItems = {1: {id: 1, title: "Item 1", price: 10}};
    const updatedCartItems = {
      1: {id: 1, title: "Item 1", price: 10},
      2: {id: 2, title: "Item 2", price: 20},
    };

    const {rerender} = render(<Cart />);
    vi.mocked(useStore).mockReturnValue(initialCartItems);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    vi.mocked(useStore).mockReturnValue(updatedCartItems);
    rerender(<Cart />);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
  });
});
