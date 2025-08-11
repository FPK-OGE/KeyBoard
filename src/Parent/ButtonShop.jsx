const ButtonShop = ({ setActive }) => {
  return (
    <button onClick={() => setActive(prev => !prev)}>
      Переключить состояние
    </button>
  );
};

export default ButtonShop;

