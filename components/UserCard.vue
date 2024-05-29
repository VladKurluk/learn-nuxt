<template>
  <div v-if="user" class="rounded p-3 flex items-center space-x-3 bg-white">
    <img
      class="rounded-full w-12 h-12 border-2 border-blue-400"
      :src="profile"
    />
    <div class="text-right">
      <div class="font-medium">{{ name }}</div>
      <button @click="logout" class="text-sm underline text-slate-500">
        Log out
      </button>
    </div>
  </div>
</template>

<script setup>
const redirectPathCookie = useCookie("sb-redirect-path");
const user = useSupabaseUser();
const client = useSupabaseClient();

const logout = async () => {
  const { error } = await client.auth.signOut();

  if (error) {
    console.error("Logout error:", error);
    return;
  }

  redirectPathCookie.value = null;
  await navigateTo("/login");
};

const name = computed(() => user.value?.user_metadata.full_name);

const profile = computed(() => user.value?.user_metadata.avatar_url);
</script>
