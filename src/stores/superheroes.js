import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userCharacterStore = defineStore('character', () => {
    
    const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS

    const characters = ref([])
    const isLoading = ref(false)

    async function get () {

        try {
            isLoading.value = true
            const response = await fetch(uri + 'all.json')
            const data = await response.json()

            if (response.status == 200) {
                characters.value = data
            }
        } catch (error) {
            throw new Error('Error loading api:' + error)
        } finally {
            isLoading.value = false
        }

    }

    return { characters, isLoading, get }
}) 