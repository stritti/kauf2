import { ref, computed, onMounted, type Ref } from 'vue'

export function useAirtableList<T>(fetcher: () => Promise<T[]>, errorMessage = 'Fehler beim Laden der Daten') {
  const list = ref<T[] | null>(null) as Ref<T[] | null>
  const error = ref<unknown>(null)
  const loading = computed(() => list.value === null)

  async function load() {
    try {
      list.value = await fetcher()
    } catch (err) {
      console.error(errorMessage, err)
      error.value = err
      list.value = []
    }
  }

  onMounted(load)

  return { list, error, loading, load }
}