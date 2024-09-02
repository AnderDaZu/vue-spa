import {
    onMounted,
    defineComponent,
    onActivated,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onDeactivated,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
    onUpdated,
    onUnmounted,
    ref,
} from 'vue';

export default defineComponent({
    setup: () => {

        console.log('setup');
        
        // Lifecycle hooks
        onMounted(() => {
            console.log('Mounted');
        });
        onUpdated(() => {
            console.log('Updated');
        });
        onUnmounted(() => {
            console.log('Unmounted');
        });
        onBeforeMount(() => {
            console.log('BeforeMount');
        });
        onBeforeUpdate(() => {
            console.log('BeforeUpdate');
        });
        onBeforeUnmount(() => {
            console.log('BeforeUnmount');
        });
        onErrorCaptured(() => {
            console.log('ErrorCaptured');
        });
        onRenderTracked(() => {
            console.log('RenderTracked');
        });
        onRenderTriggered(() => {
            console.log('RenderTriggered');
        });
        onActivated(() => {
            console.log('Activated');
        });
        onDeactivated(() => {
            console.log('Deactivated');
        });

        const counter = ref(0);

        return {
            counter,
        };
    }
});