const {
  Telegraf,
  session,
  Scenes: { WizardScene, Stage },
  Markup,
} = require("telegraf");
const {
  roleOption,
  typeOption,
  phone_keyboard,
  location_keyboard,
  structureOrder_,
  structureOrder,
  scheduleBreakOption,
  rageOfSeats_3,
  rageOfSeats,
  breakOption,
  sessionOption,
  workTimeFrom,
  workTimeTo,
  rageOfSeats_2,
  deadlineOption,
  confirmOption,
  structureOrderWithStatus_0,
  structureOrderWithStatus_1,
  confirm_delete_Form,
} = require("./option");
const {
  structure_settings_for_places,
  structure_settings_for_customers,
  structure_settings,
} = require("./structure-functions");
const validatePhoneNumber = require("validate-phone-number-node-js");
const token = "1947977166:AAF4BgNBmNnMG2NTPm2AjW_ZhXGnECi4jdY";
const validator = require("email-validator");
const date = require("date-and-time");
const rndId = require("random-id");

//                                                                     Start Schemas

const Users = require("./models/user");
const Buisness = require("./models/buisness");

//                                                                     End Schema

require("dotenv").config();
const bot = new Telegraf(token);

//                                                                     Start MongoDB

const mongoose = require("mongoose");
const mongodbkey = "eyzqKDY5vaUi4MT5";
const uri = `mongodb+srv://rere:${mongodbkey}@cluster0.uuco4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

async function start() {
  try {
    await mongoose.connect(uri, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (e) {
    console.log(e);
  }
}

start();

//                                                                     End MongoDB

//                                                                     Delete History
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                                                                     Delete History

//                                                                     Start Scenes

const remove_keyboard = Markup.removeKeyboard();

const quiteFromScene = (ctx) => {
  try {
    if (
      ctx.message &&
      ctx.message.text &&
      ctx.message.text.split("")[0] === "/"
    ) {
      return ctx.reply("Выйти");
    } else {
      return;
    }
  } catch (e) {
    console.log(e);
  }
};

//                                                  Start Info Scene

const resetBuisnessModel = async (ctx) => {
  const candidate = await Buisness.findOne({
    buisness_telegram_id: ctx.from.id,
  });
  const user_candidate = await Users.findOne({ user_telegram_id: ctx.from.id });

  if (candidate) {
    return await Buisness.findOneAndUpdate(
      { buisness_telegram_id: ctx.from.id },
      { structure: {} }
    );
  } else if (user_candidate) {
    return await Users.findOneAndUpdate(
      { user_telegram_id: ctx.from.id },
      { structure: {} }
    );
  } else {
    return;
  }
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! при команде /plan проверить !structure: {}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const nameHandler = Telegraf.on("text", async (ctx) => {
  quiteFromScene(ctx);
  await Buisness.findOneAndUpdate(
    { buisness_telegram_id: ctx.chat.id },
    { title: ctx.message.text }
  );
  await ctx.reply("2. Описание вашего предприятия: ");
  return ctx.wizard.next();
});

const descriptionHandler = Telegraf.on("text", async (ctx) => {
  quiteFromScene(ctx);
  await Buisness.findOneAndUpdate(
    { buisness_telegram_id: ctx.chat.id },
    { desc: ctx.message.text }
  );
  await ctx.reply("3. Ваш номер телефона: ", phone_keyboard);
  return ctx.wizard.next();
});

const customPhoneHandler = Telegraf.on("contact", async (ctx) => {
  if (isNaN(ctx.message.contact.phone_number))
    return await ctx.reply("Повторите попытку");
  const result = validatePhoneNumber.validate(ctx.message.contact.phone_number);
  if (!result) return await ctx.reply("Повторите попытку");
  await Buisness.findOneAndUpdate(
    { buisness_telegram_id: ctx.chat.id },
    { phone_number: ctx.message.contact.phone_number }
  );
  await ctx.reply("4. Ваш почтовый ящик: (mail.ru)", remove_keyboard);
  return ctx.wizard.next();
});

const emailHandler = Telegraf.on("text", async (ctx) => {
  quiteFromScene(ctx);
  if (!validator.validate(ctx.message.text))
    return await ctx.reply("Повторите попытку");
  await Buisness.findOneAndUpdate(
    { buisness_telegram_id: ctx.chat.id },
    { buisness_email: ctx.message.text }
  );
  await ctx.reply("5. Ваше местоположение: (location)", location_keyboard);
  return ctx.wizard.next();
});

const locationHandler = Telegraf.on("location", async (ctx) => {
  await Buisness.findOneAndUpdate(
    { buisness_telegram_id: ctx.chat.id },
    {
      location: {
        latitude: ctx.message.location.latitude,
        longitude: ctx.message.location.longitude,
      },
    }
  );
  const buisness = await Buisness.findOne({
    buisness_telegram_id: ctx.chat.id,
  });
  await Users.findOneAndUpdate(
    { user_telegram_id: ctx.chat.id },
    { buisness_acc: buisness }
  );
  await ctx.reply(
    "Параметры установлены, Пропишите /type для определения типа очереди."
  );
  return ctx.scene.leave();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const work_time_from = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  resetBuisnessModel(ctx);
  const data = ctx.callbackQuery.data;

  if (data === "work_time_from_6_00") {
    ctx.session.work_time_from = "06:00AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_6_15") {
    ctx.session.work_time_from = "06:15AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_6_30") {
    ctx.session.work_time_from = "06:30AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_7_00") {
    ctx.session.work_time_from = "07:00AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_7_30") {
    ctx.session.work_time_from = "07:30AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_8_00") {
    ctx.session.work_time_from = "08:00AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_8_30") {
    ctx.session.work_time_from = "08:30AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_9_00") {
    ctx.session.work_time_from = "09:00AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_9_30") {
    ctx.session.work_time_from = "09:30AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_10_00") {
    ctx.session.work_time_from = "10:00AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_10_30") {
    ctx.session.work_time_from = "10:30AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
  if (data === "work_time_from_11_00") {
    ctx.session.work_time_from = "11:00AM";
    await ctx.reply("До скольки ваше предприятие работает: ", workTimeTo);
    return ctx.wizard.next();
  }
});

const work_time_to = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;

  if (data === "work_time_to_6_00PM") {
    ctx.session.work_time_to = "18:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_6_15PM") {
    ctx.session.work_time_to = "18:15PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_6_30PM") {
    ctx.session.work_time_to = "18:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_7_00PM") {
    ctx.session.work_time_to = "19:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_7_30PM") {
    ctx.session.work_time_to = "19:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_8_00PM") {
    ctx.session.work_time_to = "20:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_8_30PM") {
    ctx.session.work_time_to = "20:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_9_00PM") {
    ctx.session.work_time_to = "21:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_9_30PM") {
    ctx.session.work_time_to = "21:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_10_00PM") {
    ctx.session.work_time_to = "22:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_10_30PM") {
    ctx.session.work_time_to = "22:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_11_00PM") {
    ctx.session.work_time_to = "23:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_11_30PM") {
    ctx.session.work_time_to = "23:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_12_00PM") {
    ctx.session.work_time_to = "24:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
});

const work_time_to_2 = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;

  if (data === "work_time_to_6_00PM") {
    ctx.session.work_time_to = "18:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_6_15PM") {
    ctx.session.work_time_to = "18:15PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_6_30PM") {
    ctx.session.work_time_to = "18:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_7_00PM") {
    ctx.session.work_time_to = "19:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_7_30PM") {
    ctx.session.work_time_to = "19:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_8_00PM") {
    ctx.session.work_time_to = "20:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_8_30PM") {
    ctx.session.work_time_to = "20:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_9_00PM") {
    ctx.session.work_time_to = "21:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_9_30PM") {
    ctx.session.work_time_to = "21:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_10_00PM") {
    ctx.session.work_time_to = "22:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_10_30PM") {
    ctx.session.work_time_to = "22:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_11_00PM") {
    ctx.session.work_time_to = "23:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_11_30PM") {
    ctx.session.work_time_to = "23:30PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_12_00PM") {
    ctx.session.work_time_to = "24:00PM";
    await ctx.reply("Как долго длится один сеанс.", sessionOption);
    return ctx.wizard.next();
  }
});

const work_time_to_3 = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;

  if (data === "work_time_to_6_00PM") {
    ctx.session.work_time_to = "18:00PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_6_15PM") {
    ctx.session.work_time_to = "18:15PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_6_30PM") {
    ctx.session.work_time_to = "18:30PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_7_00PM") {
    ctx.session.work_time_to = "19:00PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_7_30PM") {
    ctx.session.work_time_to = "19:30PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_8_00PM") {
    ctx.session.work_time_to = "20:00PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_8_30PM") {
    ctx.session.work_time_to = "20:30PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_9_00PM") {
    ctx.session.work_time_to = "21:00PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_9_30PM") {
    ctx.session.work_time_to = "21:30PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_10_00PM") {
    ctx.session.work_time_to = "22:00PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_10_30PM") {
    ctx.session.work_time_to = "22:30PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_11_00PM") {
    ctx.session.work_time_to = "23:00PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_11_30PM") {
    ctx.session.work_time_to = "23:30PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
  if (data === "work_time_to_12_00PM") {
    ctx.session.work_time_to = "24:00PM";
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_3);
    return ctx.wizard.next();
  }
});

const session_time = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;
  if (data === "15_session") {
    ctx.session.session_for = 15;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "30_session") {
    ctx.session.session_for = 30;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "45_session") {
    ctx.session.session_for = 45;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "60_session") {
    ctx.session.session_for = 60;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "90_session") {
    ctx.session.session_for = 90;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "120_session") {
    ctx.session.session_for = 120;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "150_session") {
    ctx.session.session_for = 150;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "180_session") {
    ctx.session.session_for = 180;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "210_session") {
    ctx.session.session_for = 210;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "240_session") {
    ctx.session.session_for = 240;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "270_session") {
    ctx.session.session_for = 270;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
  if (data === "300_session") {
    ctx.session.session_for = 300;
    await ctx.reply(
      "Впишите кол-во секций: (секция - группа мест, пример: столик в ресторане)"
    );
    return ctx.wizard.next();
  }
});

const number_of_sections = Telegraf.on("text", async (ctx) => {
  quiteFromScene(ctx);
  const places = ctx.message.text.split(" ")[0];

  if (isNaN(places)) return ctx.reply("Повторите попытку");

  const arr = [];

  // 08.08.2021
  // Схема для Каждой секции

  for (let i = 0; i < places; i++) {
    const id = rndId(
      50,
      `${(ctx.from.id, ctx.from.first_name, ctx.from.last_name)}${i - 1}`
    );
    let model = {
      section_id: id,
      section_numberof_places: 0,
      section_places: [],
      section_number: i + 1,
      status: 0,
    };
    arr.push(model);
  }

  ctx.session.sections = arr;
  ctx.session.num_sections = arr.length;

  // await ctx.reply('Какой диапазон занятия мест.', rageOfSeats)

  await ctx.reply("Количество мест в каждой секции. ( Default: 0 )");

  return ctx.wizard.next();
});

const places_per_section = Telegraf.on("text", async (ctx) => {
  quiteFromScene(ctx);
  const places = ctx.message.text.split(" ")[0];

  if (isNaN(places)) return ctx.reply("Повторите попытку");

  if (places < 0) return ctx.reply("Повторите попытку");

  ctx.session.places_per_section = places;

  await ctx.reply("Какой диапазон занятия мест.", rageOfSeats);

  return ctx.wizard.next();
});

// rageOfSeats
const range_of_seats = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;
  if (data === "range_1") {
    ctx.session.range_of_seats = 1;
    await ctx.reply(
      "Промежуток времени для подтверждения брони:",
      deadlineOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_7") {
    ctx.session.range_of_seats = 7;
    await ctx.reply(
      "Промежуток времени для подтверждения брони:",
      deadlineOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_14") {
    ctx.session.range_of_seats = 14;
    await ctx.reply(
      "Промежуток времени для подтверждения брони:",
      deadlineOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_30") {
    ctx.session.range_of_seats = 30;
    await ctx.reply(
      "Промежуток времени для подтверждения брони:",
      deadlineOption
    );
    return ctx.wizard.next();
  }
});

const deadline = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;
  if (data === "deadline_in_5") {
    ctx.session.deadline = 5;
    if (ctx.session.deadline > ctx.session.session_for) {
      return await ctx.reply(
        "Время для подтверждения не может быть больше, чем время самого сеанса."
      );
    }
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  } else if (data === "deadline_in_10") {
    ctx.session.deadline = 10;
    if (ctx.session.deadline > ctx.session.session_for) {
      return await ctx.reply(
        "Время для подтверждения не может быть больше, чем время самого сеанса."
      );
    }
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  } else if (data === "deadline_in_15") {
    ctx.session.deadline = 15;
    if (ctx.session.deadline > ctx.session.session_for) {
      return await ctx.reply(
        "Время для подтверждения не может быть больше, чем время самого сеанса."
      );
    }
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  } else if (data === "deadline_in_20") {
    ctx.session.deadline = 20;
    if (ctx.session.deadline > ctx.session.session_for) {
      return await ctx.reply(
        "Время для подтверждения не может быть больше, чем время самого сеанса."
      );
    }
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  } else if (data === "deadline_in_30") {
    ctx.session.deadline = 30;
    if (ctx.session.deadline > ctx.session.session_for) {
      return await ctx.reply(
        "Время для подтверждения не может быть больше, чем время самого сеанса."
      );
    }
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  } else if (data === "deadline_in_60") {
    ctx.session.deadline = 60;
    if (ctx.session.deadline > ctx.session.session_for) {
      return await ctx.reply(
        "Время для подтверждения не может быть больше, чем время самого сеанса."
      );
    }
    await ctx.reply("Сколько длится обеденный перерыв:", breakOption);
    return ctx.wizard.next();
  }
});

// rangeOfSeats
const range_of_seats_2 = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;
  if (data === "range_7_") {
    ctx.session.range_of_seats = 7;
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  }
  if (data === "range_14_") {
    ctx.session.range_of_seats = 14;
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  }
  if (data === "range_21_") {
    ctx.session.range_of_seats = 21;
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  }
  if (data === "range_28_") {
    ctx.session.range_of_seats = 28;
    await ctx.reply("Сколько длится дневной перерыв:", breakOption);
    return ctx.wizard.next();
  }
});

const range_of_seats_3 = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;
  if (data === "range_1m") {
    ctx.session.range_of_seats = "1m";
    await ctx.reply(
      "В какой день недели ваше предприятие не работает: ",
      scheduleBreakOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_2m") {
    ctx.session.range_of_seats = "2m";
    await ctx.reply(
      "В какой день недели ваше предприятие не работает: ",
      scheduleBreakOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_3m") {
    ctx.session.range_of_seats = "3m";
    await ctx.reply(
      "В какой день недели ваше предприятие не работает: ",
      scheduleBreakOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_4m") {
    ctx.session.range_of_seats = "4m";
    await ctx.reply(
      "В какой день недели ваше предприятие не работает: ",
      scheduleBreakOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_5m") {
    ctx.session.range_of_seats = "5m";
    await ctx.reply(
      "В какой день недели ваше предприятие не работает: ",
      scheduleBreakOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_6m") {
    ctx.session.range_of_seats = "6m";
    await ctx.reply(
      "В какой день недели ваше предприятие не работает: ",
      scheduleBreakOption
    );
    return ctx.wizard.next();
  }
  if (data === "range_12m") {
    ctx.session.range_of_seats = "12m";
    await ctx.reply(
      "В какой день недели ваше предприятие не работает: ",
      scheduleBreakOption
    );
    return ctx.wizard.next();
  }
});

// QUEST?: Сколько длится дневной перерыв:
const forBreakHandler = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  // Сколько

  const data = ctx.callbackQuery.data;

  if (data === "15_break") {
    ctx.session.break_for = 15;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
  if (data === "30_break") {
    ctx.session.break_for = 30;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
  if (data === "45_break") {
    ctx.session.break_for = 45;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
  if (data === "60_break") {
    ctx.session.break_for = 60;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
  if (data === "90_break") {
    ctx.session.break_for = 90;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
  if (data === "120_break") {
    ctx.session.break_for = 120;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
  if (data === "150_break") {
    ctx.session.break_for = 150;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
  if (data === "180_break") {
    ctx.session.break_for = 180;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
  if (data === "no_break") {
    ctx.session.break_for = 0;
    await ctx.reply("Со cкольки перерыв: (Пример: 12.30)");
    return ctx.wizard.next();
  }
});

const fromBreakHandler = Telegraf.on("text", async (ctx) => {
  quiteFromScene(ctx);
  // Сколько
  const time = ctx.message.text.split(" ")[0];

  if (isNaN(time)) return await ctx.reply("Повторите попытку.");

  if (time.split(".")[0].length === 1)
    return await ctx.reply("Повторите попытку.");

  if (time.split(".")[1].length === 1)
    return await ctx.reply("Повторите попытку.");

  if (time.split(".")[0] > 23 && time.split(".")[1] !== 00)
    return await ctx.reply("Повторите попытку.");

  if (time.split(".")[1] > 59 || time.split(".")[0] == 00)
    return await ctx.reply("Повторите попытку.");

  ctx.session.break_from = time;

  await ctx.reply(
    "В какой день недели ваше предприятие не работает: ",
    scheduleBreakOption
  );

  return ctx.wizard.next();
  // Со-скольки
});

// scheduleBreakOption
const scheduleBreak = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;

  let session = (ctx.session.sch_break = []);

  if (data === "sch_monday") session.push("Понедельник");

  if (data === "sch_tuesday") session.push("Вторник");

  if (data === "sch_wednesday") session.push("Среда");

  if (data === "sch_thursday") session.push("Четверг");

  if (data === "sch_friday") session.push("Пятница");

  if (data === "sch_saturday") session.push("Суббота");

  if (data === "sch_sunday") session.push("Воскресенье");

  if (data === "sch_sun_sat") session.push("Суббота", "Воскресенье");

  /////////////////////////////////////////////////////////////////////////////// ------ Data ~~~ ++!!!!!!

  // const candidate = await Users.findOne
  // ctx.session.places_per_section
  for (let j = 0; j < ctx.session.num_sections; j++) {
    ctx.session.sections[j].section_places = [];
    for (let i = 0; i < ctx.session.places_per_section; i++) {
      const id = rndId(
        60,
        `${i - 1}${(ctx.from.last_name, ctx.from.first_name, ctx.from.id)}`
      );
      let model = { place_id: id, place_index: i + 1, status: 0 };
      ctx.session.sections[j].section_places.push(model);
    }
  }

  const db = {
    sections: ctx.session.sections,
    session_for: ctx.session.session_for,
    num_of_sections: ctx.session.num_sections,
    range_of_seats: ctx.session.range_of_seats,
    break_for: ctx.session.break_for,
    break_from: ctx.session.break_from,
    sch_break: ctx.session.sch_break,
    work_time_from: ctx.session.work_time_from,
    work_time_to: ctx.session.work_time_to,
    deadline: ctx.session.deadline,
    type: "structural",
  };
  // places_per_section
  await Buisness.findOneAndUpdate(
    { buisness_telegram_id: ctx.from.id },
    { structure: db }
  );
  const buisness = await Buisness.findOne({
    buisness_telegram_id: ctx.chat.id,
  });
  await Users.findOneAndUpdate(
    { user_telegram_id: ctx.chat.id },
    { buisness_acc: buisness }
  );

  await ctx.reply(
    "Параметры установлены. ( /plan - для обзора вашего расписания )"
  );
  return ctx.scene.leave();
});

// scheduleBreakOption_2
const scheduleBreak_2 = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;

  let session = (ctx.session.sch_break = []);

  if (data === "sch_monday") session.push("Понедельник");

  if (data === "sch_tuesday") session.push("Вторник");

  if (data === "sch_wednesday") session.push("Среда");

  if (data === "sch_thursday") session.push("Четверг");

  if (data === "sch_friday") session.push("Пятница");

  if (data === "sch_saturday") session.push("Суббота");

  if (data === "sch_sunday") session.push("Воскресенье");

  if (data === "sch_sun_sat") session.push("Суббота", "Воскресенье");

  /////////////////////////////////////////////////////////////////////////////// ------ Data ~~~ ++!!!!!!

  const db = {
    session_for: ctx.session.session_for,
    range_of_seats: ctx.session.range_of_seats,
    break_for: ctx.session.break_for,
    break_from: ctx.session.break_from,
    sch_break: ctx.session.sch_break,
    work_time_from: ctx.session.work_time_from,
    work_time_to: ctx.session.work_time_to,
    type: "plain",
  };

  await Buisness.findOneAndUpdate(
    { buisness_telegram_id: ctx.from.id },
    { structure: db }
  );
  const buisness = await Buisness.findOne({
    buisness_telegram_id: ctx.chat.id,
  });
  await Users.findOneAndUpdate(
    { user_telegram_id: ctx.chat.id },
    { buisness_acc: buisness }
  );
  await ctx.reply(
    "Параметры установлены. ( /plan - для обзора вашего расписания )"
  );
  return ctx.scene.leave();
});

// scheduleBreakOption_3
const scheduleBreak_3 = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;

  let session = (ctx.session.sch_break = []);

  if (data === "sch_monday") session.push("Понедельник");

  if (data === "sch_tuesday") session.push("Вторник");

  if (data === "sch_wednesday") session.push("Среда");

  if (data === "sch_thursday") session.push("Четверг");

  if (data === "sch_friday") session.push("Пятница");

  if (data === "sch_saturday") session.push("Суббота");

  if (data === "sch_sunday") session.push("Воскресенье");

  if (data === "sch_sun_sat") session.push("Суббота", "Воскресенье");

  /////////////////////////////////////////////////////////////////////////////// ------ Data ~~~ ++!!!!!!

  const db = {
    range_of_seats: ctx.session.range_of_seats,
    sch_break: ctx.session.sch_break,
    work_time_from: ctx.session.work_time_from,
    work_time_to: ctx.session.work_time_to,
    type: "global",
  };

  await Buisness.findOneAndUpdate(
    { buisness_telegram_id: ctx.from.id },
    { structure: db }
  );
  const buisness = await Buisness.findOne({
    buisness_telegram_id: ctx.chat.id,
  });
  await Users.findOneAndUpdate(
    { user_telegram_id: ctx.chat.id },
    { buisness_acc: buisness }
  );
  await ctx.reply(
    "Параметры установлены. ( /plan - для обзора вашего расписания )"
  );
  return ctx.scene.leave();
});
// ---------------------------------------------------------------!---------------------------------------------------------------------------------------- //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const session_time_2 = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;
  if (data === "15_session") {
    ctx.session.session_for = 15;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "30_session") {
    ctx.session.session_for = 30;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "45_session") {
    ctx.session.session_for = 45;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "60_session") {
    ctx.session.session_for = 60;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "90_session") {
    ctx.session.session_for = 90;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "120_session") {
    ctx.session.session_for = 120;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "150_session") {
    ctx.session.session_for = 150;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "180_session") {
    ctx.session.session_for = 180;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "210_session") {
    ctx.session.session_for = 210;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "240_session") {
    ctx.session.session_for = 240;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "270_session") {
    ctx.session.session_for = 270;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
  if (data === "300_session") {
    ctx.session.session_for = 300;
    await ctx.reply("Какой диапазон занятия мест.", rageOfSeats_2);
    return ctx.wizard.next();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                  End Info Scene

//                                                  Start Type Scene

const strHandler = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  if (ctx.callbackQuery.data === "structural_type") {
    ctx.scene.leave();
    ctx.scene.enter("strScene");
  } else if (ctx.callbackQuery.data === "plain_type") {
    ctx.scene.leave();
    ctx.scene.enter("plainScene");
  } else if (ctx.callbackQuery.data === "global_type") {
    ctx.scene.leave();
    ctx.scene.enter("globalScene");
  }
});

const confirm_delete_form = Telegraf.on("callback_query", async (ctx) => {
  quiteFromScene(ctx);
  const data = ctx.callbackQuery.data;
  const candidate_buisness = await Buisness.findOne({
    buisness_telegram_id: ctx.from.id,
  });

  if (data === "cancel_delete_btn_structural") {
    ctx.scene.leave();
    return await ctx.deleteMessage();
  } else if (data === "confirm_delete_btn_structural") {
    try {
      await Users.findOneAndDelete({ user_telegram_id: ctx.from.id });
      if (candidate_buisness) {
        await Buisness.findOneAndDelete({ buisness_telegram_id: ctx.from.id });
      }
      await ctx.deleteMessage();
      await ctx.reply(
        "Ваш аккаунт успешно удалён. ✅ ( /start - Для создания аккаунта. )"
      );
      return ctx.scene.leave();
    } catch (e) {
      await ctx.reply("Произошла ошибка, попробуйте снова.");
      return ctx.scene.leave();
    }
  }
});

//                                                  End Type Scene

//                       Info Scene

const infoScene = new WizardScene(
  "infoScene",
  nameHandler,
  descriptionHandler,
  customPhoneHandler,
  emailHandler,
  locationHandler
);

infoScene.enter((ctx) => ctx.reply("1. Название вашего предприятия: "));

//                       Type Scene

const typeScene = new WizardScene("typeScene", strHandler);

typeScene.enter((ctx) =>
  ctx.reply("1. Тип очереди: ( Дополнительная Инф. /info )", typeOption)
);

//                       Structural Scene

const StrScene = new WizardScene(
  "strScene",
  work_time_from,
  work_time_to,
  session_time,
  number_of_sections,
  places_per_section,
  range_of_seats,
  deadline,
  forBreakHandler,
  fromBreakHandler,
  scheduleBreak
);

StrScene.enter((ctx) =>
  ctx.reply("Со скольки ваше предприятие работает: ", workTimeFrom)
);

//                       Plain Scene

const PlainScene = new WizardScene(
  "plainScene",
  work_time_from,
  work_time_to_2,
  session_time_2,
  range_of_seats_2,
  forBreakHandler,
  fromBreakHandler,
  scheduleBreak_2
);

PlainScene.enter((ctx) =>
  ctx.reply("Со скольки ваше предприятие работает: ", workTimeFrom)
);

const DeleteAccountScene = new WizardScene(
  "DeleteAccountScene",
  confirm_delete_form
);

DeleteAccountScene.enter((ctx) => {
  ctx.reply(
    "⚠️ Вы действительно желаете удалить ваш аккаунт? ⚠️",
    confirm_delete_Form
  );
});

//                       Detailed Scene

const DetailedScene = new WizardScene(
  "globalScene",
  work_time_from,
  work_time_to_3,
  range_of_seats_3,
  scheduleBreak_3
);

//                        Delete Account

DetailedScene.enter(
  async (ctx) =>
    await ctx.reply("Со скольки ваше предприятие работает: ", workTimeFrom)
);

//                       End Type Scenes

const stage = new Stage([
  infoScene,
  typeScene,
  StrScene,
  PlainScene,
  DetailedScene,
  DeleteAccountScene,
]);
stage.hears("Выйти", (ctx) => ctx.scene.leave());
bot.use(session(), stage.middleware());

bot.action("role_option_2", async (ctx) => {
  try {
    const user_telegram_id = ctx.from.id;
    const user = await Users.findOne({ user_telegram_id, role: 1 });
    if (!user) {
      const buisness = new Buisness({
        buisness_telegram_id: user_telegram_id,
        structure: {},
      });
      await buisness.save();
      await Users.findOneAndUpdate({ user_telegram_id }, { role: 1 });
      return ctx.scene.enter("infoScene");
    } else {
      return ctx.scene.enter("infoScene");
    }
  } catch (e) {
    return await ctx.reply("Ошибка, Попробуйте снова.");
  }
});

//                                                                     End Scenes

//                                                                     Common commands

bot.telegram.setMyCommands([
  { command: "/start", description: "Начальное Приветствие." },
  { command: "/info", description: "Дополнительная Информация." },
  { command: "/role", description: "Определите Роль." },
  { command: "/type", description: "Определите Очередь. (После Роли)" },
  { command: "/plan", description: "План Очереди." },
  { command: "/delete_account", description: "Удалить Аккаунт." },
]);

//                                                                     Common commands

//-------------------------------------------------------------------Start Commands Body

bot.command("start", async (ctx) => {
  const firstname = ctx.from.first_name;
  const last_name = ctx.from.last_name;
  const user_telegram_id = ctx.from.id;

  // Start DB
  const candidate = await Users.findOne({ user_telegram_id });

  if (!candidate) {
    const user = new Users({
      username: firstname,
      last_name,
      user_telegram_id,
      email: String(ctx.from.id),
    });
    await user.save();
    await bot.telegram.sendSticker(
      ctx.chat.id,
      "https://tlgrm.eu/_/stickers/b9f/9a3/b9f9a3a8-0900-33cd-8469-1623889b5d9d/1.webp"
    );
    await ctx.reply(
      `Привет ${ctx.from.first_name}. Зарание спасибо за доверие. Для дополнительной информации и представлении о боте, можете узнать прописав или набрав команду /info.`
    );
    return await ctx.reply(
      "A для начала работы, пропишите /role для определения вашего статуса."
    );
  } else {
    await bot.telegram.sendSticker(
      ctx.chat.id,
      "https://tlgrm.eu/_/stickers/b9f/9a3/b9f9a3a8-0900-33cd-8469-1623889b5d9d/1.webp"
    );
    return await ctx.reply(
      `Привет ${ctx.from.first_name}. Зарание спасибо за доверие. Для дополнительной информации и представлении о боте, можете узнать прописав или набрав команду /info.`
    );
  }
});

bot.command("type", async (ctx) => {
  const candidate = await Users.findOne({
    user_telegram_id: ctx.from.id,
    role: 1,
  });
  if (candidate) {
    return ctx.scene.enter("typeScene");
  }
  return await ctx.reply(
    "Для начала пропишите команду /role для определения роли."
  );
});

bot.command("delete_account", async (ctx) => {
  const candidate_user = await Users.findOne({ user_telegram_id: ctx.from.id });

  if (candidate_user) {
    ctx.scene.enter("DeleteAccountScene");
    // Stuff
  } else {
    return await ctx.reply(
      "Ошибка, Вашего аккаунта не существует ❌( /start - Для создания аккаунта. )"
    );
  }
});

bot.command("info", async (ctx) => {
  await ctx.reply(`Специализация бота проста: `);
  return await ctx.reply(
    `Это бот, который поможет вам организовать структурированную очередь в ожидании чего-то, либо занять свое место в ней.`
  );
});

bot.command("role", async (ctx) => {
  return await ctx.reply("Выбирите ваш статус.", roleOption);
});

//---------------------------------------------------------------------End Commands Body

function pagination(page, limit, select, result) {
  let startIndex = (page - 1) * limit;
  let endIndex = page * limit;

  if (endIndex < select.length) {
    result.next = {
      page: page + 1,
      limit,
    };
  } else {
    delete result["next"];
  }

  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit,
    };
  } else {
    delete result["previous"];
  }

  result.places = select.slice(startIndex, endIndex);
}

//---------------------------------------------------------------------Start Plan Command

bot.command("plan", async (ctx) => {
  const candidate = await Users.findOne({
    user_telegram_id: ctx.from.id,
    role: 1,
  });

  if (!candidate)
    return await ctx.reply(
      "Для начала пропишите команду /role для определения роли."
    );

  const type = candidate.buisness_acc.structure.type;

  if (type === "detailed") {
    const time_from = candidate.buisness_acc.structure.work_time_from;
    const time_to = candidate.buisness_acc.structure.work_time_to;
    const session_time = candidate.buisness_acc.structure.session_for;
    const break_time_for = candidate.buisness_acc.structure.break_for;

    const d = new Date(
      2015,
      0,
      2,
      Number(time_from.split(":")[0]),
      time_from.split(":")[1].split("").splice(0, 2).join("")
    );

    const f = new Date(
      2015,
      0,
      2,
      Number(time_to.split(":")[0]),
      time_to.split(":")[1].split("").splice(0, 2).join("")
    );

    const totalMinutesWB = date.subtract(f, d).toMinutes();

    const totalMinutes = totalMinutesWB - break_time_for;

    const session_times = totalMinutes / session_time;

    const daily_schedule = [];

    for (let i = 0; i <= session_times; i++) {
      let id = rndId(
        50,
        `${
          (ctx.from.id,
          ctx.from.first_name,
          ctx.from.last_name,
          Math.random() * session_time)
        }${i - 1}`
      );
      let obj = { tm: i, id };

      daily_schedule.concat(obj);
    }
    return;
  }
  if (type === "structural") {
    ctx.session.result = {};
    const sections = candidate.buisness_acc.structure.sections;
    let limit = 8;
    let page = 1;

    pagination(page, limit, sections, ctx.session.result);

    let emoji_arr = [];

    emojiFormat(ctx.session.result, emoji_arr);

    structure_settings(
      ctx,
      ctx.session.result,
      candidate.buisness_acc.structure.session_for,
      sections,
      emoji_arr
    );
  }
});

let placeIsConfirmed = false;
let sectionIsConfirmed = false;

bot.on("callback_query", async (ctx) => {
  const candidate = await Users.findOne({
    user_telegram_id: ctx.from.id,
    role: 1,
  });
  if (!candidate) return;
  if (candidate.buisness_acc.structure.type !== "structural") return;
  const data = ctx.callbackQuery.data;
  const next = "goforward_main_structural_";
  const prev = "goback_main_structural_";
  const back_to_menu = "back_to_structure_menu";
  const take_order = "take_structural_order";
  const arr = candidate.buisness_acc.structure.sections;
  const add_section = "add_place_main_structural";
  const remove_section = "remove_place_main_structural";
  const remove_place = "remove_structural_place_";
  const add_place = "add_structural_place_";
  const add_place_ = "add_place_structural";
  const remove_place_ = "remove_place_structural";
  const next_place_page = "goforward_structural_";
  const prev_place_page = "goback_structural_";
  const back_to_plan = "back_to_plan_structural";
  const take_order_place = "take_structural_order_place";
  const go_back_to_places_menu = "back_to_structure_plan";
  const order_whole_section = "order_whole_section";
  const confirm_btn_structural = "confirm_btn_structural";
  const cancel_btn_structural = "cancel_btn_structural";

  for (let i = 0; i < arr.length; i++) {
    if (data === arr[i].section_id) {
      if (arr[i].status === 0) {
        if (arr[i].section_places.length === 0) {
          const date =
            new Date().toLocaleDateString() +
            ", " +
            new Date().getHours() +
            ":" +
            new Date().getMinutes();
          ctx.deleteMessage();
          ctx.session.section_num = i;
          getInfoForEmployers(
            ctx,
            arr[i],
            candidate.buisness_acc.structure,
            candidate.buisness_acc,
            date
          );
        } else {
          ctx.session.result_ = {};
          ctx.session.section_num = i;
          let page = 1;
          const sections =
            candidate.buisness_acc.structure.sections[i].section_places;
          let limit = 12;
          pagination(page, limit, sections, ctx.session.result_);

          let emoji_arr = [];

          emojiFormat(ctx.session.result_, emoji_arr);

          let isEmpty = Boolean;

          if (checkEmptyPlaces(ctx.session.result_)) {
            isEmpty = true;
          } else {
            isEmpty = false;
          }

          ctx.deleteMessage();
          structure_settings_for_places(
            isEmpty,
            ctx,
            ctx.session.result_,
            candidate.buisness_acc.structure.session_for,
            sections,
            "№",
            emoji_arr,
            `Секция #${i + 1}`
          );
        }
      } else {
        return;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].section_places.length; j++) {
      if (data == arr[i].section_places[j].place_id) {
        ctx.session.place_num = j;
        ctx.deleteMessage();
        ctx.session.section_num = i;
        const date =
          new Date().toLocaleDateString() +
          ", " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes();
        getInfo(
          date,
          ctx,
          arr[i].section_places[j],
          candidate.buisness_acc.structure,
          ctx.session.section_num + 1,
          false,
          candidate.buisness_acc
        );
      }
    }
  }

  if (data === next && ctx.session.result) {
    try {
      let page = ctx.session.result.next.page;
      const sections = candidate.buisness_acc.structure.sections;
      let limit = 8;
      pagination(page, limit, sections, ctx.session.result);

      let emoji_arr = [];

      emojiFormat(ctx.session.result, emoji_arr);

      ctx.deleteMessage();
      structure_settings(
        ctx,
        ctx.session.result,
        candidate.buisness_acc.structure.session_for,
        sections,
        emoji_arr
      );
    } catch (e) {}
  } else if (data === prev && ctx.session.result) {
    try {
      let page = ctx.session.result.previous.page;
      const sections = candidate.buisness_acc.structure.sections;
      let limit = 8;
      pagination(page, limit, sections, ctx.session.result);

      let emoji_arr = [];

      emojiFormat(ctx.session.result, emoji_arr);

      ctx.deleteMessage();
      structure_settings(
        ctx,
        ctx.session.result,
        candidate.buisness_acc.structure.session_for,
        sections,
        emoji_arr
      );
    } catch (e) {}
  } else if (data === back_to_menu) {
    try {
      ctx.deleteMessage();
      ctx.session.result = {};
      const sections = candidate.buisness_acc.structure.sections;
      let limit = 8;
      let page = 1;
      pagination(page, limit, sections, ctx.session.result);

      let emoji_arr = [];

      emojiFormat(ctx.session.result, emoji_arr);

      structure_settings(
        ctx,
        ctx.session.result,
        candidate.buisness_acc.structure.session_for,
        sections,
        emoji_arr
      );
    } catch (e) {}
  } else if (data === take_order) {
    try {
      sectionIsConfirmed = true;
      placeIsConfirmed = false;
      const arr = candidate.buisness_acc.structure.sections;
      let time = candidate.buisness_acc.structure.deadline;
      arr[ctx.session.section_num].status = 3;
      let session_for = candidate.buisness_acc.structure.session_for;
      await Users.findOneAndUpdate(
        { user_telegram_id: ctx.from.id, role: 1 },
        { buisness_acc: candidate.buisness_acc }
      );
      confirmOrder(time, ctx, ctx.session.section_num + 1, "секции");
      async function deadline() {
        const user = await Users.findOne({
          user_telegram_id: ctx.from.id,
          role: 1,
        });
        let status_to_confirm =
          user.buisness_acc.structure.sections[ctx.session.section_num]
            .section_places[ctx.session.place_num].status;
        if (status_to_confirm !== 1 && status_to_confirm !== 0) {
          arr[ctx.session.section_num].status = 0;
          await Users.findOneAndUpdate(
            { user_telegram_id: ctx.from.id, role: 1 },
            { buisness_acc: candidate.buisness_acc }
          );
          sectionIsConfirmed = false;
          placeIsConfirmed = false;
        }
      }
      const buisness_info = candidate.buisness_acc;
      async function common_deadline() {
        let status =
          candidate.buisness_acc.structure.sections[ctx.session.section_num]
            .section_places[ctx.session.place_num].status;
        if (status !== 0) {
          status = 0;
          await Users.findOneAndUpdate(
            { user_telegram_id: ctx.from.id, role: 1 },
            { buisness_acc: candidate.buisness_acc }
          );
          return await ctx.replyWithMarkdown(
            `*ℹ️ Информация * ➖@koalinbot➖
            
_Название: _ ${buisness_info.title}
_Date: _ ${date}
_ID Предприятия: _ ${buisness_info.buisness_telegram_id}
_Секция: _ №${ctx.session.section_num + 1}
_Время: _ ${session_for} мин.
🛑 *Сеанс Окончен* 🛑
          `
          );
        }
      }
      setTimeout(common_deadline, session_for * (10000 * 6));
      setTimeout(deadline, time * 60000 + 10000 * 6);
      return await ctx.replyWithMarkdown(
        `⚠️ * Будьте готовы подтвердить бронь через ${candidate.buisness_acc.structure.deadline} минут * ⚠️`
      );
    } catch (e) {}
  } else if (data === add_section) {
    try {
      const sections = candidate.buisness_acc.structure.sections;
      const id = rndId(
        50,
        `${(ctx.from.id, ctx.from.first_name, ctx.from.last_name)}${
          sections.length - 1
        }`
      );
      let model = {
        section_id: id,
        section_numberof_places: 0,
        section_places: [],
        section_number: sections.length + 1,
        status: 0,
      };
      sections.push(model);
      await Users.findOneAndUpdate(
        { user_telegram_id: ctx.from.id, role: 1 },
        { buisness_acc: candidate.buisness_acc }
      );
      ctx.deleteMessage();
      ctx.session.result = {};
      let limit = 8;
      let page = 1;
      pagination(page, limit, sections, ctx.session.result);

      let emoji_arr = [];

      emojiFormat(ctx.session.result, emoji_arr);

      structure_settings(
        ctx,
        ctx.session.result,
        candidate.buisness_acc.structure.session_for,
        sections,
        emoji_arr
      );
    } catch (e) {}
  } else if (data === remove_section) {
    try {
      const sections = candidate.buisness_acc.structure.sections;
      sections.pop();
      await Users.findOneAndUpdate(
        { user_telegram_id: ctx.from.id, role: 1 },
        { buisness_acc: candidate.buisness_acc }
      );
      ctx.deleteMessage();
      ctx.session.result = {};
      let limit = 8;
      let page = 1;
      pagination(page, limit, sections, ctx.session.result);

      let emoji_arr = [];

      emojiFormat(ctx.session.result, emoji_arr);

      structure_settings(
        ctx,
        ctx.session.result,
        candidate.buisness_acc.structure.session_for,
        sections,
        emoji_arr
      );
    } catch (e) {}
  } else if (data === remove_place) {
    try {
      const i = ctx.session.section_num;
      const sections =
        candidate.buisness_acc.structure.sections[i].section_places;
      if (sections && sections.length !== 0 && ctx.session.section_num) {
        sections.pop();
        await Users.findOneAndUpdate(
          { user_telegram_id: ctx.from.id, role: 1 },
          { buisness_acc: candidate.buisness_acc }
        );
      }
    } catch (e) {
      console.log(e);
    }
  } else if (data === add_place) {
    try {
      ctx.session.result_ = {};
      const i = ctx.session.section_num;
      const sections =
        candidate.buisness_acc.structure.sections[i].section_places;
      const id = rndId(
        60,
        `${sections.length - 1}${
          (ctx.from.last_name, ctx.from.first_name, ctx.from.id)
        }`
      );
      const model = {
        place_id: id,
        place_index: sections.length + 1,
        status: 0,
      };
      sections.push(model);
      await Users.findOneAndUpdate(
        { user_telegram_id: ctx.from.id, role: 1 },
        { buisness_acc: candidate.buisness_acc }
      );
      let page = 1;
      let limit = 12;
      pagination(page, limit, sections, ctx.session.result_);
      ctx.deleteMessage();

      let emoji_arr = [];

      emojiFormat(ctx.session.result_, emoji_arr);

      let isEmpty;

      if (checkEmptyPlaces(ctx.session.result_)) {
        isEmpty = true;
      } else {
        isEmpty = false;
      }

      structure_settings_for_places(
        isEmpty,
        ctx,
        ctx.session.result_,
        candidate.buisness_acc.structure.session_for,
        sections,
        "№",
        emoji_arr,
        `Секция #${i + 1}`
      );
    } catch (e) {
      console.log(e);
    }
  } else if (data === add_place_) {
    try {
      const i = ctx.session.section_num;
      const sections =
        candidate.buisness_acc.structure.sections[i].section_places;
      const id = rndId(
        60,
        `${sections.length - 1}${
          (ctx.from.last_name, ctx.from.first_name, ctx.from.id)
        }`
      );
      const model = {
        place_id: id,
        place_index: sections.length + 1,
        status: 0,
      };
      sections.push(model);
      await Users.findOneAndUpdate(
        { user_telegram_id: ctx.from.id, role: 1 },
        { buisness_acc: candidate.buisness_acc }
      );
      let page = 1;
      let limit = 12;
      pagination(page, limit, sections, ctx.session.result_);
      ctx.deleteMessage();

      let emoji_arr = [];

      emojiFormat(ctx.session.result_, emoji_arr);

      let isEmpty;

      if (checkEmptyPlaces(ctx.session.result_)) {
        isEmpty = true;
      } else {
        isEmpty = false;
      }

      structure_settings_for_places(
        isEmpty,
        ctx,
        ctx.session.result_,
        candidate.buisness_acc.structure.session_for,
        sections,
        "№",
        emoji_arr,
        `Секция #${i + 1}`
      );
    } catch (e) {}
  } else if (data === remove_place_) {
    try {
      const i = ctx.session.section_num;
      const sections =
        candidate.buisness_acc.structure.sections[i].section_places;
      if (sections && sections.length !== 0 && ctx.session.section_num) {
        sections.pop();
        await Users.findOneAndUpdate(
          { user_telegram_id: ctx.from.id, role: 1 },
          { buisness_acc: candidate.buisness_acc }
        );
        let page = 1;
        let limit = 12;
        pagination(page, limit, sections, ctx.session.result_);
        ctx.deleteMessage();

        let emoji_arr = [];

        emojiFormat(ctx.session.result_, emoji_arr);

        let isEmpty;

        if (checkEmptyPlaces(ctx.session.result_)) {
          isEmpty = true;
        } else {
          isEmpty = false;
        }

        structure_settings_for_places(
          isEmpty,
          ctx,
          ctx.session.result_,
          candidate.buisness_acc.structure.session_for,
          sections,
          "№",
          emoji_arr,
          `Секция #${i + 1}`
        );
      }
    } catch (e) {}
  } else if (data === next_place_page) {
    try {
      const i = ctx.session.section_num;
      let page = ctx.session.result_.next.page;
      const sections =
        candidate.buisness_acc.structure.sections[i].section_places;
      let limit = 12;
      pagination(page, limit, sections, ctx.session.result_);

      let emoji_arr = [];

      emojiFormat(ctx.session.result_, emoji_arr);

      let isEmpty;

      if (checkEmptyPlaces(ctx.session.result_)) {
        isEmpty = true;
      } else {
        isEmpty = false;
      }

      ctx.deleteMessage();

      structure_settings_for_places(
        isEmpty,
        ctx,
        ctx.session.result_,
        candidate.buisness_acc.structure.session_for,
        sections,
        "№",
        emoji_arr,
        `Секция #${i + 1}`
      );
    } catch (e) {}
  } else if (data === prev_place_page) {
    try {
      const i = ctx.session.section_num;
      let page = ctx.session.result_.previous.page;
      const sections =
        candidate.buisness_acc.structure.sections[i].section_places;
      let limit = 12;
      pagination(page, limit, sections, ctx.session.result_);

      let emoji_arr = [];

      emojiFormat(ctx.session.result_, emoji_arr);

      let isEmpty;

      if (checkEmptyPlaces(ctx.session.result_)) {
        isEmpty = true;
      } else {
        isEmpty = false;
      }

      ctx.deleteMessage();

      structure_settings_for_places(
        isEmpty,
        ctx,
        ctx.session.result_,
        candidate.buisness_acc.structure.session_for,
        sections,
        "№",
        emoji_arr,
        `Секция #${i + 1}`
      );
    } catch (e) {}
  } else if (data === back_to_plan) {
    try {
      let page = 1;
      const sections = candidate.buisness_acc.structure.sections;
      let limit = 8;
      pagination(page, limit, sections, ctx.session.result);
      ctx.deleteMessage();

      let emoji_arr = [];

      emojiFormat(ctx.session.result, emoji_arr);

      structure_settings(
        ctx,
        ctx.session.result,
        candidate.buisness_acc.structure.session_for,
        sections,
        emoji_arr
      );
    } catch (e) {}
  } else if (data === take_order_place) {
    try {
      sectionIsConfirmed = false;
      placeIsConfirmed = true;
      const arr =
        candidate.buisness_acc.structure.sections[ctx.session.section_num];
      let time = candidate.buisness_acc.structure.deadline;
      let session_for = candidate.buisness_acc.structure.session_for;
      arr.section_places[ctx.session.place_num].status = 3;
      const date =
        new Date().toLocaleDateString() +
        ", " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes();
      await Users.findOneAndUpdate(
        { user_telegram_id: ctx.from.id, role: 1 },
        { buisness_acc: candidate.buisness_acc }
      );
      confirmOrder(time, ctx, ctx.session.place_num + 1);
      async function deadline() {
        const user = await Users.findOne({
          user_telegram_id: ctx.from.id,
          role: 1,
        });
        let status_to_confirm =
          user.buisness_acc.structure.sections[ctx.session.section_num]
            .section_places[ctx.session.place_num].status;
        if (status_to_confirm !== 1 && status_to_confirm !== 0) {
          arr.section_places[ctx.session.place_num].status = 0;
          placeIsConfirmed = false;
          await Users.findOneAndUpdate(
            { user_telegram_id: ctx.from.id, role: 1 },
            { buisness_acc: candidate.buisness_acc }
          );
          sectionIsConfirmed = false;
          placeIsConfirmed = false;
        }
      }
      const buisness_info = candidate.buisness_acc;
      async function common_deadline() {
        let status =
          candidate.buisness_acc.structure.sections[ctx.session.section_num]
            .section_places[ctx.session.place_num].status;
        if (status !== 0) {
          status = 0;
          await Users.findOneAndUpdate(
            { user_telegram_id: ctx.from.id, role: 1 },
            { buisness_acc: candidate.buisness_acc }
          );
          return ctx.replyWithMarkdown(
            `*ℹ️ Информация * ➖@koalinbot➖
            

_Название: _ ${buisness_info.title}
_ID Предприятия: _ ${buisness_info.buisness_telegram_id}
_Date: _ ${date}
_Секция: _ №${ctx.session.section_num + 1}
_Номер Места: _ №${ctx.session.place_num + 1} 
_Время: _ ${session_for} мин.
🛑 *Сеанс Окончен* 🛑
          `
          );
        }
      }
      let info =
        candidate.buisness_acc.structure.sections[ctx.session.section_num]
          .section_places[ctx.session.place_num];
      setTimeout(common_deadline, session_for * (10000 * 6));
      setTimeout(deadline, time * 60000 + 10000 * 6);
      return await ctx.replyWithMarkdown(
        `⚠️ * Будьте готовы подтвердить бронь через ${candidate.buisness_acc.structure.deadline} минут * ⚠️`
      );
    } catch (e) {}
  } else if (data === go_back_to_places_menu) {
    try {
      const i = ctx.session.section_num;
      let page = 1;
      const sections =
        candidate.buisness_acc.structure.sections[i].section_places;
      let limit = 12;
      pagination(page, limit, sections, ctx.session.result_);

      let emoji_arr = [];

      emojiFormat(ctx.session.result_, emoji_arr);

      let isEmpty;

      if (checkEmptyPlaces(ctx.session.result_)) {
        isEmpty = true;
      } else {
        isEmpty = false;
      }

      ctx.deleteMessage();

      structure_settings_for_places(
        isEmpty,
        ctx,
        ctx.session.result_,
        candidate.buisness_acc.structure.session_for,
        sections,
        "№",
        emoji_arr,
        `Секция #${i + 1}`
      );
    } catch (e) {}
  } else if (data === order_whole_section) {
    try {
      const date =
        new Date().toLocaleDateString() +
        ", " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes();
      const arr = candidate.buisness_acc.structure.sections;
      getInfoWholeSection(
        ctx,
        arr[ctx.session.section_num],
        candidate.buisness_acc.structure,
        candidate.buisness_acc,
        date
      );
    } catch (e) {}
  } else if (data === confirm_btn_structural) {
    // Передать в сессию якорь для понимания что было заказано (секция или место) sectionIsConfirmed || placeIsConfirmed и в конце обнулить их все sectionIsConfirmed = false && placeIsConfirmed = false
    try {
      if (sectionIsConfirmed === true && placeIsConfirmed === false) {
        const arr =
          candidate.buisness_acc.structure.sections[ctx.session.section_num];
        arr.status = 1;
        await Users.findOneAndUpdate(
          { user_telegram_id: ctx.from.id, role: 1 },
          { buisness_acc: candidate.buisness_acc }
        );
        placeIsConfirmed = false;
        sectionIsConfirmed = false;
        return await ctx.replyWithMarkdown("🔔_ Заказ был подтвержден _🔔");
      } else if (placeIsConfirmed === true && sectionIsConfirmed === false) {
        const arr =
          candidate.buisness_acc.structure.sections[ctx.session.section_num];
        arr.section_places[ctx.session.place_num].status = 1;
        await Users.findOneAndUpdate(
          { user_telegram_id: ctx.from.id, role: 1 },
          { buisness_acc: candidate.buisness_acc }
        );
        placeIsConfirmed = false;
        sectionIsConfirmed = false;
        return await ctx.replyWithMarkdown("🔔_ Заказ был подтвержден _🔔");
      }
    } catch (e) {}
  } else if (data === cancel_btn_structural) {
    try {
      let place_status =
        candidate.buisness_acc.structure.sections[ctx.session.section_num]
          .section_places[ctx.session.place_num].status;
      let section_status =
        candidate.buisness_acc.structure.sections[ctx.session.section_num]
          .status;
      if (sectionIsConfirmed === true && placeIsConfirmed === false) {
        if (section_status !== 0) {
          section_status = 0;
          placeIsConfirmed = false;
          sectionIsConfirmed = false;
          await Users.findOneAndUpdate(
            { user_telegram_id: ctx.from.id, role: 1 },
            { buisness_acc: candidate.buisness_acc }
          );
          return await ctx.replyWithMarkdown("🔕_ Заказ был отменен _🔕");
        } else {
          placeIsConfirmed = false;
          sectionIsConfirmed = false;
          return await ctx.replyWithMarkdown("🔕_ Заказ был отменен _🔕");
        }
      } else if (placeIsConfirmed === true && sectionIsConfirmed === false) {
        if (place_status !== 0) {
          place_status = 0;
          placeIsConfirmed = false;
          sectionIsConfirmed = false;
          await Users.findOneAndUpdate(
            { user_telegram_id: ctx.from.id, role: 1 },
            { buisness_acc: candidate.buisness_acc }
          );
          return await ctx.replyWithMarkdown("🔕_ Заказ был отменен _🔕");
        } else {
          placeIsConfirmed = false;
          sectionIsConfirmed = false;
          return await ctx.replyWithMarkdown("🔕_ Заказ был отменен _🔕");
        }
      }
    } catch (e) {}
  }
});

// План

// Добавлять в Корзину с информацией (-)
// Убрать 180 мин с плана секций
// Поменять фразы в начале бота

// План

async function getInfoWholeSection(
  ctx,
  info,
  common_info,
  buisness_info,
  date
) {
  let status;

  if (info.status === 1 || info.status === 3) {
    status = "Занято 🔴";
  } else if (info.status === 0) {
    status = "Свободно 🟢";
  }

  let arr = [];

  function places() {
    for (let i = 0; i < info.section_places.length; i++) {
      let space = i !== 0 ? "  " : "";

      let model = `${space}*№${info.section_places[i].place_index}*`;
      arr.push(model);
    }
  }

  places();

  await ctx.replyWithMarkdown(
    `*ℹ️ Информация * ➖@koalinbot➖
            
_Название: _ ${buisness_info.title}
_Почтовый Ящик: _ ${buisness_info.buisness_email} 
_ID Предприятия: _ ${buisness_info.buisness_telegram_id}
_Date: _ ${date}
_Номера Мест: _ ${arr}
_Время: _ ${common_info.session_for} мин.
_Статус: _ ${status}`,
    structureOrder
  );
}

async function getInfo(
  date,
  ctx,
  info,
  common_info,
  num,
  type = true,
  buisness_info
) {
  let status;

  if (type) {
    if (info.status === 1 || info.status === 3) {
      status = "Занято 🔴";
      await ctx.replyWithMarkdown(
        `*ℹ️ Информация * ➖@koalinbot➖
            
  _Название: _ ${buisness_info.title}
  _Почтовый Ящик: _ ${buisness_info.buisness_email} 
  _ID Предприятия: _ ${buisness_info.buisness_telegram_id}
  _Date: _ ${date}
  _Номер Места: _ №${info.section_number}
  _Время: _ ${common_info.session_for} мин.
  _Статус: _ ${status}`,
        structureOrderWithStatus_0
      );
    } else if (info.status === 0) {
      status = "Свободно 🟢";
      await ctx.replyWithMarkdown(
        `*ℹ️ Информация * ➖@koalinbot➖
            
  _Название: _ ${buisness_info.title}
  _Почтовый Ящик: _ ${buisness_info.buisness_email} 
  _ID Предприятия: _ ${buisness_info.buisness_telegram_id}
  _Date: _ ${date}
  _Номер Места: _ №${info.section_number}
  _Время: _ ${common_info.session_for} мин.
  _Статус: _ ${status}`,
        structureOrder
      );
    }
  } else {
    if (info.status === 1 || info.status === 3) {
      status = "Занято 🔴";
      await ctx.replyWithMarkdown(
        `*ℹ️ Информация * ➖@koalinbot➖
            
  _Название: _ ${buisness_info.title}
  _Почтовый Ящик: _ ${buisness_info.buisness_email} 
  _ID Предприятия: _ ${buisness_info.buisness_telegram_id}
  _Date: _ ${date}
  _Секция: _ №${num}
  _Номер Места: _ №${info.place_index} 
  _Время: _ ${common_info.session_for} мин.
  _Статус: _ ${status}`,
        structureOrderWithStatus_1
      );
    } else if (info.status === 0) {
      status = "Свободно 🟢";
      await ctx.replyWithMarkdown(
        `*ℹ️ Информация * ➖@koalinbot➖
            
  _Название: _ ${buisness_info.title}
  _Почтовый Ящик: _ ${buisness_info.buisness_email} 
  _ID Предприятия: _ ${buisness_info.buisness_telegram_id}
  _Date: _ ${date}
  _Секция: _ №${num}
  _Номер Места: _ №${info.place_index} 
  _Время: _ ${common_info.session_for} мин.
  _Статус: _ ${status}`,
        structureOrder_
      );
    }
  }
}

async function getInfoForEmployers(
  ctx,
  info,
  common_info,
  buisness_info,
  date
) {
  let status;

  if (info.status === 1 || info.status === 3) {
    status = "Занято 🔴";
  } else if (info.status === 0) {
    status = "Свободно 🟢";
  }
  if (info.section_places.length === 0) {
    await ctx.replyWithMarkdown(
      `*ℹ️ Информация * ➖@koalinbot➖
            
_Название: _ ${buisness_info.title}
_Почтовый Ящик: _ ${buisness_info.buisness_email} 
_ID Предприятия: _ ${buisness_info.buisness_telegram_id}
_Date: _ ${date}
_Секция: _ №${num}
_Номер Места: _ №${info.place_index} 
_Время: _ ${common_info.session_for} мин.
_Статус: _ ${status}`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Добавить Место",
                callback_data: "add_structural_place_",
              },
            ],
            [
              { text: "🔙 Назад", callback_data: "back_to_structure_menu" },
              { text: "Занять ☑️", callback_data: "take_structural_order" },
            ],
          ],
        },
      }
    );
  } else {
    await ctx.replyWithMarkdown(
      `*ℹ️ Информация * ➖@koalinbot➖
            
_Название: _ ${buisness_info.title}
_Почтовый Ящик: _ ${buisness_info.buisness_email} 
_ID Предприятия: _ ${buisness_info.buisness_telegram_id}
_Date: _ ${date}
_Секция: _ №${num}
_Номер Места: _ №${info.place_index} 
_Время: _ ${common_info.session_for} мин.
_Статус: _ ${status}`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Убрать Место",
                callback_data: "remove_structural_place_",
              },
              {
                text: "Добавить Место",
                callback_data: "add_structural_place_",
              },
            ],
            [
              { text: "🔙 Назад", callback_data: "back_to_structure_menu" },
              { text: "Занять ☑️", callback_data: "take_structural_order" },
            ],
          ],
        },
      }
    );
  }
}

function emojiFormat(result, arr) {
  for (let i = 0; i < result.places.length; i++) {
    if (result.places[i].status === 0) {
      arr.push("🟢");
    } else {
      arr.push("🔴");
    }
  }
}

function checkEmptyPlaces(result) {
  let is_empty = true;
  for (let i = 0; i < result.places.length; i++) {
    if (result.places[i].status === 1 || result.places[i].status === 3) {
      is_empty = false;
      return false;
    }
  }
  if (is_empty !== false) {
    return true;
  }
}

function confirmOrder(
  deadline_time,
  ctx,
  place_section_index,
  place_section = "места"
) {
  const time = deadline_time * 60000;
  setTimeout(async () => {
    await ctx.replyWithMarkdown(
      `❕ _ Подтвердите броню ${place_section} №${place_section_index} _ ❕`,
      confirmOption
    );
  }, time);
}

//---------------------------------------------------------------------End Plan Command

bot.launch();
