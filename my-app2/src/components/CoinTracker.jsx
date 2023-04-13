import { useEffect, useState } from 'react';

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(0);
  const [cash, setCash] = useState(0);
  const onChangeCoin = e => {
    setCoin(e.target.value);
  };
  const onChangeCash = e => {
    setCash(e.target.value);
  };

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=50')
      .then(response => response.json())
      .then(data => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>The Coins!{loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <select value={coin} onChange={onChangeCoin}>
            <option key='0' value='0' selected>
              💰 SELECT COIN
            </option>
            {coins.map(item => (
              <option key={item.id} value={item.quotes.USD.price}>
                {item.name}({item.symbol}): {item.quotes.USD.price}
              </option>
            ))}
          </select>{' '}
          코인은
          <input type='number' value={cash} onChange={onChangeCash} />
          달러로 <strong>{cash ? Math.round(cash / coin) : 0}</strong>개를 살 수
          있어요!
        </>
      )}
    </>
  );
};

export default CoinTracker;
