const WP_API_URL = 'http://nextblog.local/wp-json/wp/v2';

export async function fetchServices() {
  const res = await fetch(`${WP_API_URL}/services?acf_format=standard`);
  return res.json();
}

export async function fetchTestimonials() {
  const res = await fetch(`${WP_API_URL}/testimonials?acf_format=standard`);
  return res.json();
}
