import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  data() {
    return {
      isUpdatedImg: false,
      accountData: {
        id: null,
        surname: '',
        name: '',
        patronymic: '',
        birthDate: '',
        age: null,
        img: ''
      }
    }
  },
  mounted() {
    this.accountData = {...this.displayPersonalInfo()}
  },
  methods: {
    ...mapMutations({
      setAccountInfo: "postAccount/setAccountInfo"
    }),
    displayPersonalInfo() {
      return this.getAccountInfo
    },
    openFilePicker() {
      this.$refs.fileInput.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      if (file && file.type.includes('image')) {
        const reader = new FileReader()
        reader.onload = () => {
          this.accountData.img = reader.result
          this.getAccountInfo.img = reader.result
        };
        reader.readAsDataURL(file)
        this.isUpdatedImg = true
      }
    }
  },
  computed: {
    ...mapState({
      accountInfo: state => state.postAccount.accountInfo
    }),
    ...mapGetters({
      getAccountInfo: "postAccount/getAccountInfo",
      getTodoIsFinished: "postTodos/getTodoIsFinished"
    })
  }
}