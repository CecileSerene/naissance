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

  throw new Error('No API base URL configured for this request')
}

export async function fetchGifts() {
  return request('/gifts')
}

export async function fetchGiftById(id) {
  return request(`/gifts/${encodeURIComponent(id)}`)
}

export async function submitContribution(contribution) {
  return request(`/contributions`, {
    method: 'POST',
    body: JSON.stringify({
        giftId: contribution.giftId,
        contributorName: contribution.name,
        contributionEmail: contribution.email,
        contributionAmount: contribution.amount,
        isVisible: contribution.displayName,
        message: contribution.message,
        amount: contribution.amount
    }),
  })
}
