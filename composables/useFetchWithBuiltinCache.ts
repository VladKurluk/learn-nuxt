export default async <T>(url: string) => {
  const nuxtApp = useNuxtApp();
  const { data } = useNuxtData(url);

  if (!data.value) {
    const { error } = await useFetch<T>(url, {
      headers: useRequestHeaders(["cookie"]),
      key: url,
      getCachedData(key) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      },
    });
     

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from: ${url}`,
      });
    }
  }

  return data;
};
