<script lang="ts">
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
  setup() {
    const username = ref(null);
    const password = ref(null);
    const remember_me = ref(1);

    return {
      username,
      password,
      remember_me,
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      username: {
        required,
        email,
      },
      password: {
        required,
      },
    };
  },
};
</script>
<template>
  <smart-form name="login" :validation-group="v$">
    <div>
      <div>
        <input v-model.trim="username" :class="{ 'is-invalid': v$.username.$error }" type="email" class="form-control"
          placeholder="Email" aria-label="Email" autocomplete="email username" @change="v$.username.$touch()" />
        <label>Email</label>
      </div>
      <div v-if="v$.username.$error && v$.username.required.$invalid" class="invalid-feedback d-block animation-shake">
        Email required
      </div>
      <div v-else-if="v$.username.$error && v$.username.email.$invalid" class="invalid-feedback d-block animation-shake">
        Valid Email required
      </div>
    </div>
    <div>
      <div>
        <input v-model="password" :class="{ 'is-invalid': v$.password.$error }" type="password" class="form-control"
          placeholder="Password" aria-label="Password" autocomplete="current-password" @change="v$.password.$touch()" />
        <label>Password</label>
      </div>
      <div v-if="v$.password.$error && v$.password.required.$invalid" class="invalid-feedback d-block animation-shake">
        Password required
      </div>
    </div>
    <div>
      <label>
        <input v-model="remember_me" type="checkbox" />
        <span>
          Keep Me Signed In
          <div>
            By checking this box you won't have to sign in as often on this device.
          </div>
        </span>
      </label>
    </div>
    <div>
      <button type="submit">Sign In</button>
    </div>
    <div>
      <router-link to="/account-forgot" style="font-size: 13px"> Forgot Password? </router-link>
    </div>
  </smart-form>
</template>
