<script lang="ts">
import { ref } from 'vue'
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default {
  setup() {
    const minPasswordLength = ref(7);
    const firstName = ref(null);
    const lastName = ref(null);
    const username = ref(null);
    const password = ref(null);

    return {
      minPasswordLength,
      firstName,
      lastName,
      username,
      password,
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      username: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(this.minPasswordLength),
      },
    };
  },
};
</script>
<template>
  <smart-form name="accountCreate" :validation-group="v$" @success="doCreate">
    <div>
      <div>
        <input
          v-model="username"
          :class="{ 'is-invalid': v$.username.$error }"
          type="email"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          autocomplete="username"
          @change="v$.username.$touch()"
        />
        <label>Email</label>
      </div>
      <div
        v-if="v$.username.$error && v$.username.required.$invalid"
        class="invalid-feedback animation-shake d-block"
      >
        Email required
      </div>
      <div
        v-else-if="v$.username.$error && v$.username.email.$invalid"
        class="invalid-feedback animation-shake d-block"
      >
        Valid email required
      </div>
    </div>
    <div>
      <div>
        <input
          v-model="password"
          :class="{ 'is-invalid': v$.password.$error }"
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          autocomplete="new-password"
          @change="v$.password.$touch()"
        />
        <label>Password</label>
      </div>
      <div
        v-if="v$.password.$error && v$.password.required.$invalid"
        class="invalid-feedback animation-shake d-block"
      >
        Password required
      </div>
      <div
        v-else-if="v$.password.$error && v$.password.minLength.$invalid"
        class="invalid-feedback animation-shake d-block"
      >
        Password must be at least <span v-text="minPasswordLength" /> characters
      </div>
    </div>
    <div>
      <div>
        <div>
          <input
            v-model="firstName"
            :class="{ 'is-invalid': v$.firstName.$error }"
            type="text"
            class="form-control"
            placeholder="First Name"
            aria-label="First Name"
            autocomplete="given-name"
            @change="v$.firstName.$touch()"
          />
          <label>First Name</label>
        </div>
        <div
          v-if="v$.firstName.$error && v$.firstName.required.$invalid"
          class="invalid-feedback animation-shake d-block"
        >
          First Name required
        </div>
      </div>
      <div>
        <div>
          <input
            v-model="lastName"
            :class="{ 'is-invalid': v$.lastName.$error }"
            type="text"
            class="form-control"
            placeholder="Last Name"
            aria-label="Last Name"
            autocomplete="family-name"
            @change="v$.lastName.$touch()"
          />
          <label>Last Name</label>
        </div>
        <div
          v-if="v$.lastName.$error && v$.lastName.required.$invalid"
          class="invalid-feedback animation-shake d-block"
        >
          Last Name required
        </div>
      </div>
    </div>
    <slot name="buttons">
      <div>
        <button type="submit">Create Account</button>
      </div>
    </slot>
  </smart-form>
</template>
