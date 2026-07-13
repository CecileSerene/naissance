import { gifts as giftsMock, getGiftById as getGiftByIdMock } from '../data/gifts.js'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

async function request(path, options = {}) {
  if (API_BASE_URL) {
    const url = `${API_BASE_URL}${path}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`Request failed (${response.status} ${response.statusText})`)
    }

    return response.json()
  }

  if (options.method && options.method.toUpperCase() !== 'GET') {
    throw new Error('No API base URL configured for write operations')
  }

  if (path === '/gifts') {
    return giftsMock
  }

  if (path.startsWith('/gifts/')) {
    const id = decodeURIComponent(path.slice('/gifts/'.length))
    return getGiftByIdMock(id)
  }

  throw new Error('No API base URL configured for this request')
}

export async function fetchGifts() {
  return request('/gifts')
}

export async function fetchGiftById(id) {
  return request(`/gifts/${encodeURIComponent(id)}`)
}

export async function submitContribution(id, contribution) {
  return request(`/gifts/${encodeURIComponent(id)}/contributions`, {
    method: 'POST',
    body: JSON.stringify(contribution),
  })
}
