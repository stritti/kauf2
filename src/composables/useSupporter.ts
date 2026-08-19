import { ref, onMounted } from 'vue'
import { supporterService } from '@/services/supporter.service'
import type { Supporter } from '@/types/models'

export function useSupporter(supporterId: string) {
  const supporter = ref<Supporter | null>(null)
  const error = ref<unknown>(null)

  async function load() {
    try {
      supporter.value = await supporterService.getSupporter(supporterId)
    } catch (err) {
      console.error('Fehler beim Laden des Unterstützers:', err)
      error.value = err
    }
  }

  onMounted(load)

  return { supporter, error, load }
}