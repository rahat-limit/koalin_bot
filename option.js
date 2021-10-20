module.exports = {
  roleOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Клиент", callback_data: "role_option_1" }],
        [{ text: "Частный бизнес", callback_data: "role_option_2" }],
      ],
    }),
  },
  typeOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Структурный", callback_data: "structural_type" }],
        [{ text: "Простой", callback_data: "plain_type" }],
        [{ text: "Глобальный", callback_data: "global_type" }],
      ],
    }),
  },
  phone_keyboard: {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: "Отправить контакт", request_contact: true }],
        [{ text: "Убрать клавиатуру", remove_keyboard: true }],
      ],
      one_time_keyboard: true,
    }),
  },
  location_keyboard: {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: "Отправить локацию", request_location: true }],
        [{ text: "Убрать клавиатуру", remove_keyboard: true }],
      ],
      one_time_keyboard: true,
    }),
  },
  breakOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "15 Мин", callback_data: "15_break" },
          { text: "90 Минут", callback_data: "90_break" },
        ],
        [
          { text: "30 Мин", callback_data: "30_break" },
          { text: "120 Минут", callback_data: "120_break" },
        ],
        [
          { text: "45 Мин", callback_data: "45_break" },
          { text: "150 Минут", callback_data: "150_break" },
        ],
        [
          { text: "60 Мин", callback_data: "60_break" },
          { text: "180 Минут", callback_data: "180_break" },
        ],
      ],
    }),
  },
  sessionOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "15 Мин", callback_data: "15_session" },
          { text: "90 Минут", callback_data: "90_session" },
          { text: "210 Минут", callback_data: "210_session" },
        ],
        [
          { text: "30 Мин", callback_data: "30_session" },
          { text: "120 Минут", callback_data: "120_session" },
          { text: "240 Минут", callback_data: "240_session" },
        ],
        [
          { text: "45 Мин", callback_data: "45_session" },
          { text: "150 Минут", callback_data: "150_session" },
          { text: "270 Минут", callback_data: "270_session" },
        ],
        [
          { text: "60 Мин", callback_data: "60_session" },
          { text: "180 Минут", callback_data: "180_session" },
          { text: "300 Минут", callback_data: "300_session" },
        ],
      ],
    }),
  },
  scheduleBreakOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Понедельник", callback_data: "sch_monday" },
          { text: "Четверг", callback_data: "sch_thursday" },
        ],
        [
          { text: "Вторник", callback_data: "sch_tuesday" },
          { text: "Пятница", callback_data: "sch_friday" },
        ],
        [
          { text: "Среда", callback_data: "sch_wednesday" },
          { text: "Суббота", callback_data: "sch_saturday" },
        ],
        [
          { text: "Воскресенье", callback_data: "sch_sunday" },
          { text: "Все выходные", callback_data: "sch_sun_sat" },
        ],
        [{ text: "Без выходных", callback_data: "no_sch_break" }],
      ],
    }),
  },
  breakFromOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "12:00 PM", callback_data: "break_from_12_00" },
          { text: "13:00 PM", callback_data: "break_from_13_00" },
        ],
        [
          { text: "12:15 PM", callback_data: "break_from_12_15" },
          { text: "13:15 PM", callback_data: "break_from_13_15" },
        ],
        [
          { text: "12:30 PM", callback_data: "break_from_12_30" },
          { text: "13:30 PM", callback_data: "break_from_13_30" },
        ],
        [
          { text: "12:45 PM", callback_data: "break_from_12_45" },
          { text: "13:45 PM", callback_data: "break_from_13_45" },
        ],
        [{ text: "14:00 PM", callback_data: "break_from_14_00" }],
      ],
    }),
  },
  rageOfSeats: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "1 День", callback_data: "range_1" }],
        [{ text: "7 Дней", callback_data: "range_7" }],
        [{ text: "14 Дней", callback_data: "range_14" }],
        [{ text: "30 Дней", callback_data: "range_30" }],
      ],
    }),
  },
  rageOfSeats_2: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "1 Неделя", callback_data: "range_7_" }],
        [{ text: "2 Неделя", callback_data: "range_14_" }],
        [{ text: "3 Неделя", callback_data: "range_21_" }],
        [{ text: "4 Неделя", callback_data: "range_28_" }],
      ],
    }),
  },
  rageOfSeats_3: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "1 Месяц", callback_data: "range_1m" },
          { text: "2 Месяца", callback_data: "range_2m" },
        ],
        [
          { text: "3 Месяца", callback_data: "range_3m" },
          { text: "4 Месяца", callback_data: "range_4m" },
        ],
        [
          { text: "5 Месяцев", callback_data: "range_5m" },
          { text: "6 Месяцев", callback_data: "range_6m" },
        ],
        [{ text: "1 Год", callback_data: "range_12m" }],
      ],
    }),
  },
  workTimeFrom: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "06:00AM", callback_data: "work_time_from_6_00" },
          { text: "08:30AM", callback_data: "work_time_from_8_30" },
        ],
        [
          { text: "06:15AM", callback_data: "work_time_from_6_15" },
          { text: "09:00AM", callback_data: "work_time_from_9_00" },
        ],
        [
          { text: "06:30AM", callback_data: "work_time_from_6_30" },
          { text: "09:30AM", callback_data: "work_time_from_9_30" },
        ],
        [
          { text: "07:00AM", callback_data: "work_time_from_7_00" },
          { text: "10:00AM", callback_data: "work_time_from_10_00" },
        ],
        [
          { text: "07:30AM", callback_data: "work_time_from_7_30" },
          { text: "10:30AM", callback_data: "work_time_from_10_30" },
        ],
        [
          { text: "08:00AM", callback_data: "work_time_from_8_00" },
          { text: "11:00AM", callback_data: "work_time_from_11_00" },
        ],
      ],
    }),
  },
  workTimeTo: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "06:00PM", callback_data: "work_time_to_6_00PM" },
          { text: "09:00PM", callback_data: "work_time_to_9_00PM" },
        ],
        [
          { text: "06:15PM", callback_data: "work_time_to_6_15PM" },
          { text: "09:30PM", callback_data: "work_time_to_9_30PM" },
        ],
        [
          { text: "06:30PM", callback_data: "work_time_to_6_30PM" },
          { text: "10:00PM", callback_data: "work_time_to_10_00PM" },
        ],
        [
          { text: "07:00PM", callback_data: "work_time_to_7_00PM" },
          { text: "10:30PM", callback_data: "work_time_to_10_30PM" },
        ],
        [
          { text: "07:30PM", callback_data: "work_time_to_7_30PM" },
          { text: "11:00PM", callback_data: "work_time_to_11_00PM" },
        ],
        [
          { text: "08:00PM", callback_data: "work_time_to_8_00PM" },
          { text: "11:30PM", callback_data: "work_time_to_11_30PM" },
        ],
        [
          { text: "08:30PM", callback_data: "work_time_to_8_30PM" },
          { text: "12:00PM", callback_data: "work_time_to_12_00PM" },
        ],
      ],
    }),
  },
  structureOrder: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "🔙 Назад", callback_data: "back_to_structure_menu" },
          { text: "Занять ☑️", callback_data: "take_structural_order" },
        ],
      ],
    }),
  },
  structureOrder_: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "🔙 Назад", callback_data: "back_to_structure_plan" },
          { text: "Занять ☑️", callback_data: "take_structural_order_place" },
        ],
      ],
    }),
  },
  structureOrderWithStatus_0: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "🔙 Назад", callback_data: "back_to_structure_menu" }],
      ],
    }),
  },
  structureOrderWithStatus_1: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "🔙 Назад", callback_data: "back_to_structure_plan" }],
      ],
    }),
  },
  deadlineOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "5 мин.", callback_data: "deadline_in_5" },
          { text: "15 мин.", callback_data: "deadline_in_15" },
          { text: "30 мин.", callback_data: "deadline_in_30" },
        ],
        [
          { text: "10 мин.", callback_data: "deadline_in_10" },
          { text: "20 мин.", callback_data: "deadline_in_20" },
          { text: "60 мин.", callback_data: "deadline_in_60" },
        ],
      ],
    }),
  },
  confirmOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Отменить ✖️", callback_data: "cancel_btn_structural" },
          { text: "Подтвердить ✔️", callback_data: "confirm_btn_structural" },
        ],
      ],
    }),
  },
  confirm_delete_Form: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "Отменить ✖️",
            callback_data: "cancel_delete_btn_structural",
          },
          {
            text: "Подтвердить ✔️",
            callback_data: "confirm_delete_btn_structural",
          },
        ],
      ],
    }),
  },
};
