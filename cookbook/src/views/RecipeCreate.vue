<template>
  <div>
    <div class="row">
      <!-- Левая часть с текущим рецептом -->
      <div class="raw s12 m6 l4">
        <RecipeItem :recipe="recipe" />
      </div>

      <div class="col s12 m6 l8">
        <div class="card deep-purple lighten-1 bill-card">
          <div class="card-content white-text">
            <div class="card-header">
              <span class="card-title">Создание рецепта коктейля</span>
            </div>
            <!--  -->
            <form @submit.prevent="submitHandler">
              <div class="input-field">
                <input type="text" id="name" v-model="recipe.name" required />
                <label for="name">Название коктейля</label>
              </div>
              <!--  -->
              <div class="input-field">
                <input type="url" id="image" v-model="recipe.image" required />
                <label for="image">URL изображения</label>
              </div>
              <!--  -->
              <div class="row">
                <div
                  class="row"
                  v-for="(ingredient, index) in recipe.ingredients"
                  :key="index"
                >
                  <div class="input-field col l4 m12 s12">
                    <input
                      type="text"
                      :id="'ingredientName' + index"
                      v-model="ingredient.name"
                      required
                    />
                    <label :for="'ingredientName' + index"
                      ><a
                        class="waves-effect waves-light align-left"
                        @click="removeIngredient(index)"
                      >
                        <i class="material-icons">delete</i> </a
                      >Ингредиент/Инструмент {{ index + 1 }}</label
                    >
                  </div>
                  <div class="input-field col l4 m6 s6">
                    <input
                      type="number"
                      :id="'ingredientQuantity' + index"
                      v-model="ingredient.quantity"
                      required
                    />
                    <label :for="'ingredientQuantity' + index"
                      >Количество</label
                    >
                  </div>
                  <div class="input-field col l4 m6 s6">
                    <label :for="'ingredientUnit' + index"></label>
                    <select
                      :id="'ingredientUnit' + index"
                      v-model="ingredient.unit"
                      required
                      class="browser-default"
                    >
                      <option value="pcs">1 шт</option>
                      <option value="g">1 гр</option>
                      <option value="ml">1 мл</option>
                      <option value="tsp">1 чайная ложка (5 мл)</option>
                      <option value="tbsp">1 столовая ложка (15 мл)</option>
                      <option value="cup">1 чашка (237 мл)</option>
                    </select>
                  </div>
                </div>
                <button
                  class="btn waves-effect waves-light"
                  @click="addIngredient"
                >
                  Добавить
                </button>
              </div>
              <!--  -->
              <div class="row">
                <div
                  class="input-field s12 m12 l12"
                  v-for="(step, index) in recipe.steps"
                  :key="index"
                >
                  <input
                    type="text"
                    :id="'step' + index"
                    v-model="step.description"
                    required
                  />
                  <label :for="'step' + index">
                    <a
                      class="waves-effect waves-light align-left"
                      @click="removeStep(index)"
                    >
                      <i class="material-icons">delete</i>
                    </a>
                    Шаг {{ index + 1 }}</label
                  >
                </div>
                <button class="btn waves-effect waves-light" @click="addStep">
                  Добавить
                </button>
                <div></div>
              </div>
            </form>
            <div class="row">
              <hr />
              <button
                class="btn waves-effect waves-light"
                @click="submitHandler"
                type="submit"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeItem from "@/components/RecipeItem.vue";
import { mapActions } from "vuex";

export default {
  components: {
    RecipeItem,
  },
  data() {
    return {
      recipe: {
        name: "",
        image: "",
        ingredients: [{ name: "", quantity: "", unit: "" }],
        steps: [{ description: "" }],
      },
    };
  },
  methods: {
    ...mapActions("recipes", ["addRecipe"]),
    showToast(message) {
      // Всплывающее уведомление
      // eslint-disable-next-line
      M.toast({ html: message });
    },
    async submitHandler() {
      try {
        // Вызов действия addRecipe из хранилища recipes
        await this.$store.dispatch("recipes/addRecipe", this.recipe);
        // Сброс полей формы после успешного сохранения
        this.recipe = {
          name: "",
          image: "",
          ingredients: [{ name: "", quantity: "", unit: "" }],
          steps: [{ description: "" }],
        };
        // Запрос обновленного списка рецептов из хранилища
        await this.$store.dispatch("recipes/fetchRecipes");
        // Всплывающее уведомление об успешном сохранении рецепта
        this.showToast("Рецепт успешно сохранен!");
      } catch (error) {
        // Обработка ошибок
        console.error(error);
        this.showToast("Произошла ошибка при сохранении рецепта");
      }
    },

    // Добавление нового ингредиента
    addIngredient() {
      this.recipe.ingredients.push({ name: "", quantity: "", unit: "" });
    },
    // Удаление ингредиента по индексу
    removeIngredient(index) {
      if (this.recipe.ingredients.length > 1) {
        this.recipe.ingredients.splice(index, 1);
      }
    },
    // Добавление нового шага приготовления
    addStep() {
      this.recipe.steps.push({ description: "" });
    },
    // Удаление шага приготовления по индексу
    removeStep(index) {
      if (this.recipe.steps.length > 1) {
        this.recipe.steps.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
/* Ваши стили из блока с курсом валют */
.bill-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  overflow: hidden;
  color: white;
  height: 100%;
}

.bill-card .card-content {
  padding: 1rem;
}

.bill-card .card-title {
  margin: 0;
  font-size: 1.5rem;
}

.bill-card form {
  padding: 20px;
  background-color: white; /* Изменено на голубой цвет */
}

.input-field {
  margin-bottom: 15px;
}

.input-field input:focus {
  border-bottom: 1px solid #4caf50;
  box-shadow: 0 1px 0 0 #4caf50;
}
</style>
