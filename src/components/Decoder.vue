<template>
  <div class="container">
    <div id="decodeTitle">Decoder</div>
    <input type="text" v-model="pwInput" class="inputBox" autofocus="autofocus" placeholder="请输入需要解码的内容">
    <div class="decodedShow">{{decodedNumber}}</div>
  </div>
</template>

<script>
export default {
  name: "Decoder",
  data(){
    return{
      pwInput: '',
      codeTable:{
        ')':0,
        '!':1,
        '@':2,
        '#':3,
        '$':4,
        '%':5,
        '^':6,
        '&':7,
        '*':8,
        '(':9
      },
      decodedNumber: ''
    }
  },
  methods:{
    ToCDB(str) {
      var tmp = "";
      for(var i=0;i<str.length;i++){
        if (str.charCodeAt(i) == 12288){
          tmp += String.fromCharCode(str.charCodeAt(i)-12256);
          continue;
        }
        if(str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375){
          tmp += String.fromCharCode(str.charCodeAt(i)-65248);
        }
        else{
          tmp += String.fromCharCode(str.charCodeAt(i));
        }
      }
      return tmp
    },
  },
  watch:{
    pwInput:{
      // immediate: true,
      deep: true,
      handler(newValue,_){
        // console.log(new Number(newValue))
        let temp = ''
        this.ToCDB(newValue).split('').forEach(pw => {
          // 符号才根据codeTable转换，数字不处理
          if (!(pw < 11)){
            temp += this.codeTable[pw]
          }else{
            temp += pw
          }
        })
        this.decodedNumber = temp
      }
    }
  },
}

</script>

<style lang="scss" scoped>
.container{
  width: 60%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #ccc;

  #decodeTitle{
    font-family: "Arial Black";
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0.5rem;
    margin-top: 0.5rem;
    align-self: flex-start;

  }
}

.inputBox{
  width: 50%;
  height: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: 3px solid #ccc;

  font-size: 1rem;
  font-family: Arial;
}

.decodedShow{
  width: 50%;
  height: 2rem;
  //round border
  border: #747bff 3px solid;
  border-radius: 10px;
  margin-bottom: 0.2rem;

  font-family: Arial;
  line-height: 200%;
  text-align: left;
}
</style>