<template>
    <div class="prose w-full max-w-2xl h-9">
        <h1>Log in to {{ title }}</h1>
        <button
            @click="login"
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
            Log in with Github
        </button>
        <button
            @click="logout"
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
            Logout
        </button>
    </div>
</template>
  
<script setup lang="ts">
    const { title } = useCourse();
    const supabase = useSupabaseClient();

    const login = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        });

        if (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    };
</script>