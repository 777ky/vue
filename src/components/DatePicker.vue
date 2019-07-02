<template>
<transition name="calendar">
  <div class="calendar-container">
    <div :class="['calendar-item',{'is-active':isActive}]">

      <div class="calendar-hdg-container">
        <div class="calendar-hdg-sup">Start Date</div>
        <div class="calendar-hdg">{{format()}}</div>
      </div>


      <div class="calendar-header">
        <div class="calendar-date-conainer">
          <!-- <span class="calendar-date-month">{{monthArray[current.month]}}</span> -->
          <div class="calendar-date-month">{{current.month+1}}</div>
          <div class="calendar-date-year">{{current.year}}</div>
        </div>
        <ul class="calendar-nav">
          <li class="prev"><button @click.prevent="prevYear"></button></li>
          <li class="prev-year"><button @click.prevent="prevMonth"></button></li>
          <li class="next"><button @click.prevent="nextMonth"></button></li>
          <li class="next-year"><button @click.prevent="nextYear"></button></li>
        </ul>
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

      <ul>
        <li><v-btn color="primary" round block @click="pickDate()">SET</v-btn></li>
        <li><v-btn color="accent" round flat @click="$emit('close')">CANCEL</v-btn></li>
      </ul>

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
      dayArray: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
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
      return this.selected.year + '/' + month + '/' + date
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
    padding:23px 16px;
    margin: 0px auto;
    background-color: $backgroud;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .5s ease-in-out;
    overflow:hidden;
    &.is-active{
      opacity:1;
      width:90%;
    }
}

  .calendar-hdg-container{
    text-align: center;
    .calendar-hdg-sup{
      font-size:14px;
      color:$txtSecondary;
    }
    .calendar-hdg{
      color:$txtPrimary;
      font-size:23px;
      font-weight: bold;
    }
  }


  .calendar-header{
    position: relative;
    height:45px;
    margin-bottom:16px;
    .calendar-date-conainer{
      position:absolute;
      left:50%;
      width: 50px;
      margin-left:-25px;
      .calendar-date-month{
        font-weight: bold;
        font-size:30px;
        color:$txtPrimary;
      }
      .calendar-date-year{
        font-size:14px;
        color:$txtPrimary;
        margin-top:-13px;
      }
    }

  }

  .calendar-nav{
    button {
      position: absolute;
      top:15px;
      margin: 0;
      width: 28px;
      height: 28px;
      min-height: inherit;
      border-radius: 3px;
      transition: background-color 0.3s, color 0.3s;

      &:after{
        content: '';
        position: absolute;
        top: 11px;
        width: 8px;
        height: 8px;
      }
    }
    .prev button{
      left:35px;
      &::after{
        border-color:$txtPrimary;
        border-left: 1px solid;
        border-bottom: 1px solid;
        transform: rotate(45deg);
      }
    }
    .prev-year button{
      left:5px;
      &::after{
        border-left: 3px solid;
        border-bottom: 3px solid;
        transform: rotate(45deg);
      }
    }
    .next button{
      right: 35px;
      &::after{
        border-right: 2px solid;
        border-top: 2px solid;
        transform: rotate(45deg);
      }
    }
    .next-year button{
      right: 5px;
      &::after{
        border-right: 3px solid;
        border-top: 3px solid;
        transform: rotate(45deg);
      }
    }
  }

  table {
    width: 100%;
    table-layout: fixed;
    text-align: center;
    margin-bottom: 24px;
    .date{
      cursor: pointer;
      >span {
        display: inline-block;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50%;
        transition: background-color 0.3s, color 0.3s;
        background: #fff;
      }
      &:hover, &.selected {
        > span {
          background: $primary;
          color: #fff;
        }
      }
    }
  }
}
</style>
