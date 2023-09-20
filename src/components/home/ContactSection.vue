<template>
  <section class="section section-contact">
    <div class="container_lg">
      <div class="contact-row">
        <div class="contact-content">
          <div class="section-title">
            <h3 class="title-3">Say hello</h3>
          </div>
          <p>
            If you want to hire me, or just say a few nice words, please let me
            know. I would really appreciate it.
          </p>
          <ul class="contact-list">
            <li class="contact-list__item">
              <p class="contact-list__heading">Phone:</p>
              <a
                href="tel:+380675879898"
                class="contact-list__link"
                target="_blank"
                >+3(8067)587-98-98</a
              >
            </li>
            <li class="contact-list__item">
              <p class="contact-list__heading">E-mail:</p>
              <a
                href="mailto:andrijkhimich@gmail.com"
                class="contact-list__link"
                target="_blank"
                >andrijkhimich@gmail.com</a
              >
            </li>
          </ul>
        </div>
        <div class="contact-form">
          <form class="form" @submit.prevent="handleSubmit">
            <div class="section-title">
              <h3 class="title-3">Contact form</h3>
            </div>
            <div class="form-content">
              <div
                class="form-group"
                :class="{ 'is-invalid': submitted && v$.form.name.$error }"
              >
                <label class="input-container">
                  <input
                    v-model="form.name"
                    type="text"
                    name="name"
                    id="name"
                    class="input-item"
                    placeholder="Name"
                    autocomplete="off"
                  />
                </label>
                <p class="error" v-if="submitted && v$.form.name.$error">
                  Enter your name
                </p>
              </div>
              <div
                class="form-group"
                :class="{ 'is-invalid': submitted && v$.form.email.$error }"
              >
                <label class="input-container">
                  <input
                    v-model="form.email"
                    type="text"
                    name="email"
                    id="email"
                    class="input-item"
                    placeholder="Email"
                    autocomplete="off"
                  />
                </label>
                <p class="error" v-if="submitted && v$.form.email.$error">
                  Enter your email
                </p>
              </div>
              <div
                class="form-group"
                :class="{ 'is-invalid': submitted && v$.form.textarea.$error }"
              >
                <label class="input-container">
                  <textarea
                    v-model="form.textarea"
                    class="input-item"
                    name="message"
                    id="message"
                    placeholder="Message"
                    autocomplete="off"
                  ></textarea>
                </label>
                <p class="error" v-if="submitted && v$.form.textarea.$error">
                  Enter some text
                </p>
              </div>

              <button
                class="button button_primary"
                name="submit"
                type="submit"
                id="submit"
              >
                <span>Say hello</span>
                <SvgIcons name="arrow-right" class="svg-icon" />
              </button>
              <label id="loader"></label>
              <label id="info"></label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcons from "../icons/SvgIcons.vue";
import useVuelidate from "@vuelidate/core";
import emailjs from "emailjs-com";
import { required, email } from "@vuelidate/validators";
export default {
  components: {
    SvgIcons,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        textarea: "",
      },
      submitted: false,
    };
  },
  validations() {
    return {
      form: {
        name: {
          required,
        },
        email: {
          required,
          email,
        },
        textarea: {
          required,
        },
      },
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }

      emailjs.sendForm(
        "service_ttk6ke4",
        "template_ln9457a",
        e.target,
        "19j3-8Opt_jH2g4ho",
        {
          name: this.form.name,
          email: this.form.email,
          message: this.form.textarea,
        }
      );
      // Reset form field
      this.form.name = "";
      this.form.email = "";
      this.form.textarea = "";
      alert("Thanks, for your message! )))");
      this.submitted = false;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/variables";
@import "../../assets/mixins";
@import "../../assets/fonts";

.section-contact {
  background-image: linear-gradient(
    90deg,
    rgba(17, 17, 17, 1) 0%,
    rgb(31, 31, 31) 100%
  );
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px 0;
  .section-title {
    margin-bottom: 30px;
  }

  .title-3 {
    text-align: center;
    color: $gray;
  }
}

.contact {
  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @include d(992px) {
      flex-direction: column;
    }
  }

  &-content {
    max-width: 50%;
    width: 50%;
    padding: 0 80px;
    @include d(1024px) {
      padding: 0;
      width: 45%;
    }
    @include d(992px) {
      max-width: 100%;
      width: 100%;
      padding: 0 40px;
      margin-bottom: 40px;
    }

    @include d(575px) {
      padding: 0;
    }

    & > p {
      text-align: justify;
      color: $gray;
      margin-bottom: 40px;
    }
  }

  &-form {
    width: 50%;

    @include d(992px) {
      max-width: 100%;
      width: 100%;
      padding: 0 40px;
    }

    @include d(575px) {
      padding: 0;
    }
  }
}

.input {
  &-container {
    position: relative;
    display: block;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &-item {
    width: 100%;
    border: none;
    border-bottom: 1px $gray solid;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    letter-spacing: 0.06em;
    background-color: transparent;
    transition: border $timing $duration;
    color: $yellow;

    // &:focus, &:invalid {
    //   border-bottom: 1px solid $yellow;

    //   & ~ .input-label {
    //     font-size: 10px;
    //     top: -8px;
    //     color: $yellow;
    //   }
    // }
  }

  // &-label {
  //   position: absolute;
  //   transition: color $timing $duration;
  //   left: 0;
  //   top: 15px;
  //   font-size: 14px;
  //   transition: font-size 0.4s ease, top 0.4s ease;
  //   pointer-events: none;
  // }
}

.form {
  position: relative;
  padding: 40px 60px 60px;
  box-shadow: 0 12px 43px -6px rgba(0, 0, 0, 0.75);
  max-width: 90%;

  @include d(1024px) {
    max-width: 100%;
  }
  @include d(992px) {
    margin-top: 0;
    max-width: 100%;
    padding: 40px;
  }

  @include d(575px) {
    padding: 20px;
  }
  &-group {
    position: relative;
    margin-bottom: 20px;
    &.is-invalid .input-item {
      border-bottom: 1px solid tomato;
      color: tomato;
    }
  }
  .button {
    display: block;
    text-align: center;
    margin: 40px auto 0;
    box-shadow: 0 12px 43px -6px rgba(0, 0, 0, 0.75);

    @include rh(1024px) {
      &:hover {
        box-shadow: 0 12px 23px -6px rgba(0, 0, 0, 0.75);

        .svg-icon {
          margin-left: 10px;
          fill: $yellow;
        }
      }
    }
  }
}

.contact-list {
  position: relative;

  &__item {
    display: block;
    margin-bottom: 30px;
  }

  &__heading {
    font-size: 18px;
    font-family: $font-secondary;
    font-weight: 700;
    margin-bottom: 5px;
    color: $yellow;
  }

  &__link {
    font-size: 16px;
    color: $gray;
  }
}

.error {
  font-size: 10px;
  color: tomato;
  position: absolute;
  bottom: -20px;
  left: 0;
}
</style>