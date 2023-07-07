<template>
  <div class="personal_account">
    <main-window msg="Личный кабинет" :style="setStyle()">
      <div class="avatar_n_text">
        <div class="avatar_container">
          <input type="file" ref="fileInput" @change="onFileChange">
          <img class="personal__img" :src="accountData.img" alt="Изображение" @click="openFilePicker">
          <a @click="openFilePicker">Изменить</a>
        </div>
        <div class="personal_text_data">
          <p><strong>Фамилия:</strong> {{ accountData.surname }}</p>
          <p><strong>Имя:</strong> {{ accountData.name }}</p>
          <p><strong>Отчество:</strong> {{ accountData.patronymic }}</p>
          <p><strong>Дата рождения:</strong> {{ accountData.birthDate }}</p>
          <p><strong>Возраст:</strong> {{ accountData.age }}</p>
        </div>
      </div>
      <div class="chart_container">
        <div class="finished_events__chart">
          <canvas ref="chartCanvas" class="pie_chart"></canvas>
        </div>
      </div>
    </main-window>

    <main-modal msg="Фото Обновлено" v-model:show="isUpdatedImg" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Chart from 'chart.js/auto';
import personalAccountMixin from "@/mixins/PersonalAccountMixin";
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "PersonalAccountView",
  mixins: [personalAccountMixin, toggleMixin],
  data() {
    return {
      selectedImage: null,
    }
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      const chartCanvas = this.$refs.chartCanvas
      const ctx = chartCanvas.getContext('2d')

      const trueCount = this.getTodoIsFinished.filter(Boolean).length
      const falseCount = this.getTodoIsFinished.length - trueCount

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Не завершенные дела', 'Завершенные дела'],
          datasets: [{
            data: [falseCount, trueCount],
            backgroundColor: ['#fcabab', '#ccfc85']
          }]
        },
        options: { plugins: { legend: {
          labels: {
            font: {
              size: 16,
            },
            padding: 15
          },
        }}}
      })
    },
    setStyle() {
      return 'width: 70%; flex-direction: row; margin: 0 auto; padding: 50px; background-color: #fafdff; justify-content: space-between;'
    }
  }
}
</script>

<style lang="scss" scoped>

.personal_text_data {
  border: 1px solid #6696c9;
  padding: 10px;
  border-radius: 4px;
  p {
    padding: 5px 20px;
  }
}

.avatar_n_text {
  width: 50%;
}

.avatar_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  input {
    display: none
  }
  a {
    cursor: pointer;
  }
}

.personal__img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #336aa1;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 6px solid #1f4162;
  }
  &:active {
    border: 8px solid #173149;
  }
}

.chart_container {
  margin-top: 20px;
  width: 40%;
}

.finished_events__chart {
  width: 250px;
  margin: 15px auto 0;
}

</style>