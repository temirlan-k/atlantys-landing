import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-br  to-blue-50 p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-main_color">
        Поможем выбрать подходящее решение
      </h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="ФИО*"
            className="input rounded-lg p-2 border-gray-300 shadow-sm"
          />
          <input
            type="text"
            placeholder="Компания*"
            className="input rounded-lg p-2 border-gray-300 shadow-sm"
          />
          <input
            type="text"
            placeholder="Контакты*"
            className="input rounded-lg p-2 border-gray-300 shadow-sm col-span-1 md:col-span-2"
          />
          <textarea
            placeholder="Комментарий"
            className="textarea rounded-lg p-2 border-gray-300 shadow-sm col-span-1 md:col-span-2"
            rows="4"
          ></textarea>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="agree" className="checkbox" />
          <label htmlFor="agree" className="text-sm text-gray-600">
            Я согласен(а) с условиями Политики конфиденциальности
          </label>
        </div>
        <button
          type="submit"
          className=" bg-sub_color  text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
