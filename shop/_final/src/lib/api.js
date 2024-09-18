const API_BASE_URL = "https://dummyjson.com/products";

export class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "APIError";
    this.status = status;
  }
}

async function handleResponse(response) {
  if (!response.ok) {
    throw new APIError("API request failed", response.status);
  }
  return response.json();
}

function addSortParams(url, filters) {
  if (filters.sort) {
    const [field, order] = filters.sort.split("_");
    return `${url}&sortBy=${field}&order=${order}`;
  }
  return url;
}

export async function getAllProducts(limit = 30, skip = 0, filters = {}) {
  let url = `${API_BASE_URL}?limit=${limit}&skip=${skip}`;
  url = addSortParams(url, filters);
  const response = await fetch(url);
  return handleResponse(response);
}

export async function getProduct(id) {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  return handleResponse(response);
}

export async function searchProducts(
  query,
  limit = 30,
  skip = 0,
  filters = {}
) {
  let url = `${API_BASE_URL}/search?q=${encodeURIComponent(
    query
  )}&limit=${limit}&skip=${skip}`;
  url = addSortParams(url, filters);
  const response = await fetch(url);
  return handleResponse(response);
}

export async function getProductsByCategory(
  category,
  limit = 30,
  skip = 0,
  filters = {}
) {
  let url = `${API_BASE_URL}/category/${encodeURIComponent(
    category
  )}?limit=${limit}&skip=${skip}`;
  url = addSortParams(url, filters);
  const response = await fetch(url);
  return handleResponse(response);
}
