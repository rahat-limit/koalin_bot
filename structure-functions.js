module.exports = {
  structure_settings_for_places,
  structure_settings_for_customers,
  structure_settings,
};

async function structure_settings(
  ctx,
  result,
  time,
  sections,
  emoji = [],
  title = `Ваш индивидуальный план очереди.`
) {
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1 //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            { text: "Вперед ->", callback_data: "goforward_main_structural_" },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  // End 1
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            { text: "Вперед ->", callback_data: "goforward_main_structural_" },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  // End 2
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            { text: "Вперед ->", callback_data: "goforward_main_structural_" },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  // End 3
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            { text: "Вперед ->", callback_data: "goforward_main_structural_" },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  // End 4
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            { text: "Вперед ->", callback_data: "goforward_main_structural_" },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  // End 5
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            { text: "Вперед ->", callback_data: "goforward_main_structural_" },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  // End 6
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[6].section_number}, ( ${emoji[6]} )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[6].section_number}, ( ${emoji[6]} )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[6].section_number}, ( ${emoji[6]} )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[6].section_number}, ( ${emoji[6]} )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            { text: "Вперед ->", callback_data: "goforward_main_structural_" },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  // End 7
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[6].section_number}, ( ${emoji[6]} )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
            {
              text: `Секция: ${result.places[7].section_number}, ( ${emoji[7]} )`,
              callback_data: result.places[7].section_id,
            },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[6].section_number}, ( ${emoji[6]} )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
            {
              text: `Секция: ${result.places[7].section_number}, ( ${emoji[7]} )`,
              callback_data: result.places[7].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[6].section_number}, ( ${emoji[6]} )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
            {
              text: `Секция: ${result.places[7].section_number}, ( ${emoji[7]} )`,
              callback_data: result.places[7].section_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_main_structural_" }],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `Секция: ${result.places[0].section_number}, ( ${emoji[0]} )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `Секция: ${result.places[4].section_number}, ( ${emoji[4]} )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[1].section_number}, ( ${emoji[1]} )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `Секция: ${result.places[5].section_number}, ( ${emoji[5]} )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[2].section_number}, ( ${emoji[2]} )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `Секция: ${result.places[6].section_number}, ( ${emoji[6]} )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            {
              text: `Секция: ${result.places[3].section_number}, ( ${emoji[3]} )`,
              callback_data: result.places[3].section_id,
            },
            {
              text: `Секция: ${result.places[7].section_number}, ( ${emoji[7]} )`,
              callback_data: result.places[7].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            { text: "Вперед ->", callback_data: "goforward_main_structural_" },
          ],
          [
            {
              text: "Убрать ( - )",
              callback_data: "remove_place_main_structural",
            },
            {
              text: "Добавить ( + )",
              callback_data: "add_place_main_structural",
            },
          ],
        ],
      },
    });
  }
}

async function structure_settings_for_places(
  is_places_empty,
  ctx,
  result,
  time,
  sections,
  headline = "",
  emoji,
  title = `Ваш индивидуальный план очереди.`
) {
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title}  ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1 //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 1
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 2
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 3
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 4
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 5
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 6
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ][
            { text: "Занять всю секцию", callback_data: "order_whole_section" }
          ],
          ,
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 7
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 8
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 9
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 9
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 9
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 9
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 9
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 10
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 10
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 10
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 10
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 10
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 11
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 11
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 11
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 11
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 11
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 12
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
            {
              text: `${emoji[11]} ${headline}${result.places[11].place_index}, (${time}min.)`,
              callback_data: result.places[11].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 12
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
            {
              text: `${emoji[11]} ${headline}${result.places[11].place_index}, (${time}min.)`,
              callback_data: result.places[11].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 12
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
            {
              text: `${emoji[11]} ${headline}${result.places[11].place_index}, (${time}min.)`,
              callback_data: result.places[11].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == true &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 12
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
            {
              text: `${emoji[11]} ${headline}${result.places[11].place_index}, (${time}min.)`,
              callback_data: result.places[11].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],
          [{ text: "Занять всю секцию", callback_data: "order_whole_section" }],
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title}  ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1 //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 1
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 2
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 3
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 4
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 5
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 6
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ][
            { text: "Занять всю секцию", callback_data: "order_whole_section" }
          ],
          ,
          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 7
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 8
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 9
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 9
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 9
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 9
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 9
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 10
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 10
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 10
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 10
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 10
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 11
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 11
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 11
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 11
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  // End 11
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 12
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
            {
              text: `${emoji[11]} ${headline}${result.places[11].place_index}, (${time}min.)`,
              callback_data: result.places[11].place_id,
            },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 12
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
            {
              text: `${emoji[11]} ${headline}${result.places[11].place_index}, (${time}min.)`,
              callback_data: result.places[11].place_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 12
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
            {
              text: `${emoji[11]} ${headline}${result.places[11].place_index}, (${time}min.)`,
              callback_data: result.places[11].place_id,
            },
          ],
          [{ text: "Вперед ->", callback_data: "goforward_structural_" }],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
  if (
    is_places_empty == false &&
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 12
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} ${headline}${result.places[0].place_index}, (${time}min.)`,
              callback_data: result.places[0].place_id,
            },
            {
              text: `${emoji[4]} ${headline}${result.places[4].place_index}, (${time}min.)`,
              callback_data: result.places[4].place_id,
            },
            {
              text: `${emoji[8]} ${headline}${result.places[8].place_index}, (${time}min.)`,
              callback_data: result.places[8].place_id,
            },
          ],
          [
            {
              text: `${emoji[1]} ${headline}${result.places[1].place_index}, (${time}min.)`,
              callback_data: result.places[1].place_id,
            },
            {
              text: `${emoji[5]} ${headline}${result.places[5].place_index}, (${time}min.)`,
              callback_data: result.places[5].place_id,
            },
            {
              text: `${emoji[9]} ${headline}${result.places[9].place_index}, (${time}min.)`,
              callback_data: result.places[9].place_id,
            },
          ],
          [
            {
              text: `${emoji[2]} ${headline}${result.places[2].place_index}, (${time}min.)`,
              callback_data: result.places[2].place_id,
            },
            {
              text: `${emoji[6]} ${headline}${result.places[6].place_index}, (${time}min.)`,
              callback_data: result.places[6].place_id,
            },
            {
              text: `${emoji[10]} ${headline}${result.places[10].place_index}, (${time}min.)`,
              callback_data: result.places[10].place_id,
            },
          ],
          [
            {
              text: `${emoji[3]} ${headline}${result.places[3].place_index}, (${time}min.)`,
              callback_data: result.places[3].place_id,
            },
            {
              text: `${emoji[7]} ${headline}${result.places[7].place_index}, (${time}min.)`,
              callback_data: result.places[7].place_id,
            },
            {
              text: `${emoji[11]} ${headline}${result.places[11].place_index}, (${time}min.)`,
              callback_data: result.places[11].place_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_structural_" },
            { text: "Вперед ->", callback_data: "goforward_structural_" },
          ],
          [
            { text: "Убрать ( - )", callback_data: "remove_place_structural" },
            { text: "Добавить ( + )", callback_data: "add_place_structural" },
          ],

          [
            {
              text: "Вернуться к Плану",
              callback_data: "back_to_plan_structural",
            },
          ],
        ],
      },
    });
  }
}

async function structure_settings_for_customers(
  ctx,
  result,
  time,
  sections,
  title = `Ваш индивидуальный план очереди.`,
  emoji
) {
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1 //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 1
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  // End 1
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 2
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  // End 2
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 3
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  // End 3
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 4
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  // End 4
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 5
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  // End 5
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 6
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  // End 6
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `${emoji[6]} Секция: ${result.places[6].section_number}, ( ${time} min. )`,
              callback_data: result.places[6].section_id,
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `${emoji[6]} Секция: ${result.places[6].section_number}, ( ${time} min. )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `${emoji[6]} Секция: ${result.places[6].section_number}, ( ${time} min. )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 7
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `${emoji[6]} Секция: ${result.places[6].section_number}, ( ${time} min. )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  // End 7
  if (
    result.places &&
    !result.next &&
    !result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[6]} Секция: ${result.places[6].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
            {
              text: `${emoji[7]} Секция: ${result.places[7].section_number}, ( ${time} min. )`,
              callback_data: result.places[6].section_id,
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    !result.next &&
    result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[6]} Секция: ${result.places[6].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
            {
              text: `${emoji[7]} Секция: ${result.places[7].section_number}, ( ${time} min. )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [{ text: "<- Назад", callback_data: "goback_main_structural_" }],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    !result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[6]} Секция: ${result.places[6].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
            {
              text: `${emoji[7]} Секция: ${result.places[7].section_number}, ( ${time} min. )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
  if (
    result.places &&
    result.next &&
    result.previous &&
    result.places.length == 8
  ) {
    await ctx.reply(`${title} ( Всего: ${sections.length} )`, {
      reply_markup: {
        //1
        inline_keyboard: [
          [
            {
              text: `${emoji[0]} Секция: ${result.places[0].section_number}, ( ${time} min. )`,
              callback_data: result.places[0].section_id,
            },
            {
              text: `${emoji[4]} Секция: ${result.places[4].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
          ],
          [
            {
              text: `${emoji[1]} Секция: ${result.places[1].section_number}, ( ${time} min. )`,
              callback_data: result.places[1].section_id,
            },
            {
              text: `${emoji[5]} Секция: ${result.places[5].section_number}, ( ${time} min. )`,
              callback_data: result.places[4].section_id,
            },
          ],
          [
            {
              text: `${emoji[2]} Секция: ${result.places[2].section_number}, ( ${time} min. )`,
              callback_data: result.places[2].section_id,
            },
            {
              text: `${emoji[6]} Секция: ${result.places[6].section_number}, ( ${time} min. )`,
              callback_data: result.places[5].section_id,
            },
          ],
          [
            {
              text: `${emoji[3]} Секция: ${result.places[3].section_number}, ( ${time} min. )`,
              callback_data: result.places[3].section_id,
            },
            {
              text: `${emoji[7]} Секция: ${result.places[7].section_number}, ( ${time} min. )`,
              callback_data: result.places[6].section_id,
            },
          ],
          [
            { text: "<- Назад", callback_data: "goback_main_structural_" },
            {
              text: "Вперед ->",
              callback_data: "goforward_main_structural_",
            },
          ],
        ],
      },
    });
  }
}
