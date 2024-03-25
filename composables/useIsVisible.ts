import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export function useIsVisible(): { isVisible: Ref<boolean>, observedElement: Ref<Element | null> } {
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  const observedElement: Ref<Element | null> = ref(null);

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting;
    });

    if (observedElement.value) {
      observer.observe(observedElement.value);
    }
  });

  onUnmounted(() => {
    if (observer && observedElement.value) {
      observer.unobserve(observedElement.value);
    }
    observer = null;
  });

  return { isVisible, observedElement };
}
