<template>
  <div id="main-wrapper">
    <div class="main-heading">Personal Information</div>
    <div class="px-10 h-full">
      <div id="username-row">
        <div id="picture_name">
          <!-- <div id="profile_picture"></div> -->
          <img id="profile_picture" src="./user.jpg" alt="" />
          <div id="username">{{ user.firstName }} {{ user.lastName }}</div>
        </div>
        <div id="profile-buttons">
          <button
            v-if="!isInEditingMode"
            class="edit-button"
            @click="isInEditingMode = true"
          >
            <IconsEdit /> Edit profile
          </button>
          <button
            v-if="isInEditingMode"
            class="save-button"
            @click="formSubmitBtnRef.click"
          >
            Save changes
          </button>
          <div class=""></div>
        </div>
      </div>
      <div id="info-activity-wrapper">
        <div id="userinfo-block">
          <div id="info" v-if="!isInEditingMode">
            <div>
              <button
                type="submit"
                ref="formSubmitBtnRef"
                class="hidden"
              ></button>
              <div class="profile-col">
                <div>
                  <span>Full name</span>
                  <div id="username">
                    <span>
                      {{ user.firstName }}
                    </span>
                    <span>
                      {{ user.lastName }}
                    </span>
                  </div>
                </div>
                <div>
                  <span>Location</span>
                  <div>
                    {{ user.street }}
                  </div>
                </div>
                <div>
                  <span>Country</span>
                  <div>
                    {{ user.country }}
                  </div>
                </div>
              </div>
              <div class="profile-col">
                <div>
                  <span>Email address</span>
                  <div>
                    {{ user.email }}
                  </div>
                </div>
                <div>
                  <span>Gender</span>
                  <div class="relative">
                    {{ user.gender }}
                  </div>
                </div>
                <div>
                  <span>Phone number</span>
                  <div>
                    {{ user.phone }}
                  </div>
                </div>
              </div>
            </div>
            <div id="bottom-row">
              <span> About </span>
              <div>
                {{ user.remarks }}
              </div>
            </div>
          </div>
          <div id="updateInfo" v-if="isInEditingMode">
            <Form
              :validation-schema="formValidationSchema"
              :initial-values="formInitialValues"
              @submit="handleSubmit"
            >
              <div>
                <div class="col">
                  <!-- <label for="firstName">First Name</label>
                  <input type="text" name="firstName" /> -->
                  <ProfileFormTextinput name="firstName" label="First Name" />
                </div>
                <div class="col">
                  <!-- <label for="lastName">Last Name</label>
                  <input type="text" name="lastName" /> -->
                  <ProfileFormTextinput name="lastName" label="Last Name" />
                </div>
              </div>
              <div>
                <div class="col">
                  <!-- <label for="street">Street</label>
                  <input type="text" name="street" /> -->
                  <ProfileFormTextinput name="street" label="Street" />
                </div>
                <div class="col">
                  <!-- <label for="country">Country</label>
                  <input type="text" name="country" /> -->
                  <ProfileFormTextinput name="country" label="Country" />
                </div>
              </div>
              <div>
                <div class="col_full relative">
                  <!-- <label for="gender">Gender</label>
                  <input type="text" name="gender" /> -->
                  <ProfileFormTextinput name="gender" label="Gender" />
                  <!-- <label  class="block text-sm font-medium text-gray-700">Gender</label>
                  <ProfileFormGenderselect :options="['male','female','other']" :selected="user.gender" @update:gender=""/> -->

                  <!-- <ProfileFormSelectInput
                    name="gender"
                    label="Gender"
                    :options="['male', 'female', 'other']"
                    :selected="user.gender"
                    /> -->
                </div>
              </div>
              <div>
                <div class="col_full">
                  <!-- <label for="about">About</label>
                  <input type="text" name="remarks" /> -->
                  <ProfileFormTextinput name="remarks" label="About" />
                </div>
              </div>
              <button
                type="submit"
                class="hidden"
                ref="formSubmitBtnRef"
              ></button>
            </Form>
          </div>
        </div>

        <div id="activity-block">
          <div>Activity</div>
          <div>
            <div class="activity_row">
              <div id="image">
                <IconsUser />
              </div>
              <div id="activity_name_user">
                <span id="activity_type">Message to </span
                ><span id="username">Luc Ganssou</span
                ><span id="role">(painter)</span>
              </div>
              <div id="date">Dec 29</div>
            </div>
            <div class="activity_row">
              <div id="image">
                <IconsUser />
              </div>
              <div id="activity_name_user">
                <span id="activity_type">Message to </span
                ><span id="username">Luc Ganssou</span
                ><span id="role">(painter)</span>
              </div>
              <div id="date">Dec 29</div>
            </div>
            <div class="activity_row">
              <div id="image">
                <IconsUser />
              </div>
              <div id="activity_name_user">
                <span id="activity_type">Message to </span
                ><span id="username">Luc Ganssou</span
                ><span id="role">(painter)</span>
              </div>
              <div id="date">Dec 29</div>
            </div>
            <div class="activity_row">
              <div id="image">
                <IconsUser />
              </div>
              <div id="activity_name_user">
                <span id="activity_type">Message to </span
                ><span id="username">Luc Ganssou</span
                ><span id="role">(painter)</span>
              </div>
              <div id="date">Dec 29</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useUserStore } from "~~/stores/userStore";
import { User } from "~~/types/user";
let isInEditingMode = ref(false);
// const formRef = ref(null);
const formSubmitBtnRef = ref();

let { fetchUserProfileData, updateUserProfileData } = useUserStore();
let { user } = storeToRefs(useUserStore());
let userStore = useUserStore();
fetchUserProfileData();
// const userInfo: Pick<
//   User,
//   "firstName" | "lastName" | "street" | "remarks" | "country" | "gender"
// > = {
//   firstName: user.value.firstName,
//   lastName: user.value.lastName,
//   street: user.value.street,
//   remarks: user.value.remarks,
//   country: user.value.country,
//   gender: user.value.gender,
// };
const formValidationSchema = yup.object({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  street: yup.string().required("required"),
  remarks: yup.string().required("required"),
  country: yup.string().required("required"),
  gender: yup.string().required("required"),
});
const formInitialValues = {
  firstName: user.value.firstName,
  lastName: user.value.lastName,
  street: user.value.street,
  remarks: user.value.remarks,
  country: user.value.country,
  gender: user.value.gender,
};
const handleSubmit = (formValues: User) => {
  isInEditingMode.value = false;
  // console.log("Submitted", formValues);
  updateUserProfileData(formValues);
};
// const { handleSubmit, errors } = useForm({
//       validationSchema,
//       initialValues: {
//         pets: 1,
//         catering: false,
//         music: false
//       }
//     });
</script>
<style lang="postcss" scoped>
#main-wrapper {
  @apply h-full;
  @apply flex flex-col;
}

.main-heading {
  @apply text-cod-gray text-xl font-medium text-left;
  @apply pl-10;
  @apply pt-10 pb-8;
  @apply mb-4;
  @apply border-b-1 border-black;
}

#username-row {
  @apply flex flex-row justify-between;
  @apply mb-4;

  #picture_name {
    @apply flex flex-row;
    @apply items-center;
    @apply gap-x-6;

    #profile_picture {
      @apply rounded-full;
    }

    #username {
      @apply text-cod-gray;
      @apply text-xl;
      @apply font-medium;
    }
  }

  #profile-buttons {
    @apply flex flex-row items-center;
    @apply gap-x-2;

    > button {
      @apply py-2 px-4 rounded-full;
      @apply h-12;
      @apply border-1 border-mischka;
    }

    .edit-button {
      /* @apply bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-full; */
      @apply bg-primary text-white;
      @apply flex flex-row items-center;
      @apply gap-x-1;
    }

    .save-button {
      /* @apply bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-full; */
      @apply bg-white text-cod-gray;
    }
  }
}

#info-activity-wrapper {
  @apply flex flex-row justify-between;

  #userinfo-block {
    @apply w-2/3;
    @apply pr-24;

    > #info {
      @apply flex flex-col;
      @apply gap-y-8;

      > :first-child {
        @apply flex flex-row gap-x-44;
      }

      .profile-col {
        @apply flex flex-col;
        @apply gap-y-10;
        @apply py-4;
        @apply px-0;
        @apply text-black;
        @apply text-left;

        > div {
          @apply h-full;
        }

        > div span {
          @apply text-dove-gray;
        }

        > div div {
          @apply text-cod-gray text-base font-normal;

          > span {
            @apply mr-1;
          }

          > input {
            @apply border border-gray-400;
            @apply w-1/2 px-1 py-0 rounded-r-2xl;
          }
        }
      }

      #bottom-row {
        @apply flex flex-col;

        > span {
          @apply text-dove-gray;
          @apply mb-4;
        }

        > div {
          @apply text-cod-gray text-base font-normal;

          > input {
            @apply border border-gray-400;
            @apply w-full px-1 py-0 rounded-r-2xl;
          }
        }
      }
    }
    > #updateInfo {
      > form {
        @apply flex flex-col;
        @apply gap-y-8;
        @apply text-base;
        @apply pt-4;
        > div {
          @apply flex flex-row gap-x-8 w-full;
          > .col {
            @apply flex flex-col w-1/2;
            > label {
              @apply text-dove-gray;
              @apply mb-1;
            }
            > input {
              @apply border border-gray-400;
              @apply w-full px-2 py-2 rounded-xl;
            }
          }
          > .col_full {
            @apply flex flex-col w-full;
            > label {
              @apply text-dove-gray;
              @apply mb-1;
            }
            > input {
              @apply border border-gray-400;
              @apply w-full px-2 py-2 rounded-xl;
            }
          }
        }
      }
    }
  }

  #activity-block {
    @apply w-1/3;
    @apply flex flex-col;

    > :first-child {
      @apply text-black;
      @apply text-2xl;
      @apply text-left;
      @apply mb-4;
    }

    > :nth-child(2) {
      @apply w-full;
      @apply h-96;

      > .activity_row {
        @apply flex flex-row justify-between items-center;
        @apply h-16;

        > #image {
          @apply w-1/5;
          @apply h-full;
          @apply flex justify-center items-center;
          background-image: linear-gradient(#ebebeb, #ebebeb);
          background-size: 1px 100%;
          background-repeat: no-repeat;
          background-position: center;

          > svg {
            @apply rounded-full;
            @apply w-10;
            @apply h-10;
          }
        }

        > #activity_name_user {
          @apply w-3/5;
          @apply flex flex-row flex-wrap;
          @apply gap-x-2;

          > #username {
            @apply font-medium;
          }

          /* > #activity_name {
          } */
        }

        > #date {
          @apply w-1/5;
          @apply text-right;
          @apply text-dove-gray;
          @apply text-sm;
        }
      }
    }
  }
}

.inline {
  @apply flex flex-row;
}
</style>
