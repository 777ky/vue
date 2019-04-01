<template>
<transition name="calendar">
  <div class="calendar-container">
    <div :class="['calendar-item',{'is-active':isActive}]">

      <p>{{selectValue}}</p>
      <h1 class="output">{{format()}}</h1>
      <div class="header row between-xs middle-xs">
        <div class="prev row">
          <button @click.prevent="prevYear"></button>
          <button @click.prevent="prevMonth"></button>
        </div>
        <h4>{{current.year}} {{ monthArray[current.month] }}</h4>
        <div class="next row">
          <button @click.prevent="nextMonth"></button>
          <button @click.prevent="nextYear"></button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td v-for="(day,index) in dayArray" :key="index">{{day}}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in buildCalendar" :key="index">
            <td class="date" :class="{selected: date.selected}"
                @click="selectDate(date.value)"
                v-for="(date, index) in week"
                v-if="date.value"
                :key="index"><span>{{date.value}}</span></td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>

      <div>
      <!-- TODO:setでSTARTボタンactiveになるように -->
      <button @click="pickDate()">SET</button>
      </div>
      <button @click="$emit('close')">CANCEL</button>

    </div>

    <div class="calendar-mask" @click="$emit('close')"></div>

  </div>
  </transition>
</template>

<script>
export default {
  name: 'date-picker',
  data() {
    return {
      isActive:false,
      display: null,
      monthArray: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      dayArray: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      current: {
        year: '',
        month: ''
      },
      selected: {
        year: '',
        month: '',
        date: ''
      },
      value: new Date(),
      selectValue: new Date(),
      calendar: {}
    }
  },
  computed: {
    buildCalendar() {
      let dates = []
      let calendar = []
      const firstDayOfMonth = new Date(
        this.current.year,
        this.current.month,
        1
      ).getDay()

      const endDateOfMonth = new Date(
        this.current.year,
        this.current.month+1,
        0
      ).getDate()

      for (let i = 0; i < firstDayOfMonth; i++) {
        dates.push('')
      }
      for (let i = 0; i < endDateOfMonth; i++) {
        dates.push(i + 1)
      }

      const dateObject = dates.map(value => {
        const selected =
          value === this.selected.date &&
          this.current.month === this.selected.month &&
          this.current.year === this.selected.year
        return { value, selected }
      })


      for (let i = 0; i < dateObject.length; i += 7) {
        let week = dateObject.slice(i, i + 7)
        calendar.push(week)
      }
      return calendar
    }
  },
  created() {
    this.setDate(this.value)
  },
  methods: {
    setDate(value) {
      const date = new Date(value)
      this.selected.year = this.current.year = date.getFullYear()
      this.selected.month = this.current.month = date.getMonth()
      this.selected.date = date.getDate()
    },
    selectDate(date) {
      this.selected.year = this.current.year
      this.selected.month = this.current.month
      this.selected.date = date
    },
    pickDate(){
      this.$emit('close')
      this.$store.dispatch('PICK_SELECT_DATE', new Date(
        this.selected.year,
        this.selected.month,
        this.selected.date
      ))
    },
    format() {
      let month = ('0' + (this.selected.month + 1)).slice(-2)
      let date = ('0' + this.selected.date).slice(-2)
      return this.selected.year + '-' + month + '-' + date
    },
    prevYear() {
      if (this.current.year >= 0) {
        this.current.year--
      }
    },
    nextYear() {
      this.current.year++
    },
    prevMonth() {
      if (this.current.month <= 0) {
        this.prevYear()
        this.current.month = 11
      } else {
        this.current.month--
      }
    },
    nextMonth() {
      if (this.current.month >= 11) {
        this.nextYear()
        this.current.month = 0
      } else {
        this.current.month++
      }
    }
  },
  mounted(){
    setTimeout(()=>this.isActive = true, 100);
  }
}
</script>

<style scoped lang="scss">
@import "../static/styles/set.scss";
.calendar-mask {
  display:flex;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: all .3s ease;
}
.calendar-container {
  display:flex;
  top:0;
  left:0;
  position:fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  align-items:center;

  .calendar-item{
    z-index: 10000;
    opacity:0;
    width: 0;
    padding:20px;
    margin: 0px auto;
    background-color: $backgroud;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .5s ease-in-out;
    overflow:hidden;
    &.is-active{
      opacity:1;
      width:95%;
      height:85%;
    }
}

  .output{
    text-align: center;
  }
  .header {
    h4{
      margin: 1.5em 0;
      font-size: 1.1rem;
      font-weight: 300;
    }
    button {
      position: relative;
      margin: 0;
      width: 28px;
      height: 28px;
      min-height: inherit;
      border-radius: 3px;
      transition: background-color 0.3s, color 0.3s;
      &:hover{
        background: #2a2a2a;
        color: #fff;
      }
      &:after{
        content: '';
        position: absolute;
        top: 11px;
        width: 7px;
        height: 7px;
      }
    }
    .prev button{
      margin-right: 0.2rem;
      &:first-child:after{
        left: 12px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(45deg);
      }
      &:last-child:after{
        left: 12px;
        border-left: 1px solid;
        border-bottom: 1px solid;
        transform: rotate(45deg);
      }
    }
    .next button{
      margin-left: 0.2rem;
      &:last-child:after{
        left: 8px;
        border-right: 2px solid;
        border-top: 2px solid;
        transform: rotate(45deg);
      }
      &:first-child:after{
        left: 8px;
        border-right: 1px solid;
        border-top: 1px solid;
        transform: rotate(45deg);
      }
    }
  }
  table {
    width: 100%;
    table-layout: fixed;
    text-align: center;
    font-size: 0.8rem;
    .date{
      padding: 0.2rem;
      cursor: pointer;
      >span {
        display: inline-block;
        width: 28px;
        height: 28px;
        line-height: 29px;
        border-radius: 50%;
        transition: background-color 0.3s, color 0.3s;
      }
      &:hover, &.selected {
        > span {
          background: #2a2a2a;
          color: #fff;
        }
      }
    }
  }
}
/* Layout */
.row {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}
.end-xs {
  justify-content: flex-end;
  text-align: end;
}
.middle-xs {
  align-items: center;
}
.between-xs {
  justify-content: space-between;
}

/* Button */
button {
  font-size: 0.9rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  min-height: 40px;
  appearance: none;
  -webkit-tap-highlight-color: initial;
  tap-highlight-color: initial;
}
</style>
