<template lang="html">
  <v-slider
    ref="input"
    v-bind="$attrs"
    class="dc-text-field"
    :hide-details="!(errors && errors.length)"
    :loading="loading"
    :error-messages="errors"
    :value="safeValue"
    :disabled="isDisabled"
    :outlined="!regular"
    @change="change"
    @focus="focused = true"
    @blur="focused = false"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>
    <template #append>
      <slot name="append" />
    </template>
  </v-slider>
</template>

<script lang="js">
  import SmartInput from '/imports/ui/components/global/SmartInputMixin.js';

  export default {
    mixins: [SmartInput],
    props: {
      regular: Boolean,
    },
  };
</script>
