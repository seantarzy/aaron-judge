// Data Dive unified analytics

function gtagSend(...args) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

export function trackEvent(eventName, params) {
  gtagSend('event', eventName, params);
}

// Tier 1 — Universal Events

export function trackCTAClick({ cta_text, cta_location, cta_destination }) {
  trackEvent('cta_click', { cta_text, cta_location, cta_destination });
}

export function trackOutboundClick({ url, link_text, link_location }) {
  trackEvent('outbound_click', { url, link_text, link_location });
}

export function trackNavigationClick({ destination, nav_location }) {
  trackEvent('navigation_click', { destination, nav_location });
}

export function trackContentEngagement({ content_type, content_id, engagement_type, value }) {
  trackEvent('content_engagement', { content_type, content_id, engagement_type, value });
}

export function trackShareClick({ method, content_type, content_id }) {
  trackEvent('share_click', { method, content_type, content_id });
}

export function trackError({ error_type, error_message, error_location }) {
  trackEvent('error_encountered', { error_type, error_message, error_location });
}

// Tier 2 — Fan Site Events

export function trackGamePlay(gameType, action, score) {
  trackEvent('game_play', { game_type: gameType, action, score });
}

export function trackScheduleView(gameDate, opponent) {
  trackEvent('schedule_view', { game_date: gameDate, opponent });
}

export function trackStatLookup(statType, period) {
  trackEvent('stat_lookup', { stat_type: statType, period });
}

export function trackMerchClick(item, location) {
  trackEvent('merch_click', { item, location });
}
