import {render, screen} from "@testing-library/react";
import React from "react";
import {describe, expect, it} from "vitest";
import ProductCard from "../../components/ProductCard";

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    const mockProduct = {
      id: 1,
      title: "Test Product",
      price: 19.99,
      thumbnail: "test-image.jpg",
    };

    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-image.jpg");
  });
});
