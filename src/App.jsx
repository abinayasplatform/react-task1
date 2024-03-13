import '../src/App.css';

const PriceCard = ({ plan, price, users, storage, publicProjects, access, privateProjects, phoneSupport, subdomain, statusReports,button }) => {
  return (
    <div className="price-card">

      <h4 className="plan">{plan}</h4>
      
      <h1 className="month">${price}/month</h1>
      
        <p>✓ {users} Users</p>

        <p >✓ {storage} Storage</p>

        <p className={publicProjects ? 'show' : 'hide'}>
          {publicProjects ? '✓ Unlimited Public Projects': '✘ Unlimited Public Projects ' } 
          </p>

        <p className={access ? 'show' : 'hide'}>
          {access ? '✓ Community Access' : '✘ Community Access'}
          </p>

        <p className={privateProjects ? 'show' : 'hide'}>
          {privateProjects ? '✓ Unlimited Private Projects' : " ✘ Unlimited Private Projects"} 
          </p>

        <p className={phoneSupport ? 'show' : 'hide'}>
          {phoneSupport ? '✓ Dedicated Phone Support' : ' ✘  Dedicated Phone Support'}
          </p>

        <p className={subdomain ? 'show' : 'hide'}>
          {subdomain ? '✓ Free Subdomain' : '✘ Free Subdomain' }
          </p>

        <p className={statusReports ? 'show' : 'hide'}>
          {statusReports ? '✓ Monthly Status Reports' : '✘ Monthly Status Reports'}
          </p>

        <button className={button ? 'enabled' : 'disabled'}>{button ? 'BUTTON' : 'BUTTON'}</button>

    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <PriceCard
        plan="FREE"
        price={0}
        users="Single"
        storage="50GB"
        publicProjects={true}
        access={true}
        privateProjects={false}
        phoneSupport={false}
        subdomain={false}
        statusReports={false}
        button={false}
      />
      <PriceCard
        plan="PLUS"
        price={9}
        users={5}
        storage="50GB"
        publicProjects={true}
        access={true}
        privateProjects={true}
        phoneSupport={true}
        subdomain={true}
        statusReports={false}
        button={false}
      />
      <PriceCard
        plan="PRO"
        price={49}
        users="Unlimited"
        storage="50GB"
        publicProjects={true}
        access={true}
        privateProjects={true}
        phoneSupport={true}
        subdomain={true}
        statusReports={true}
        button={true}
      />
    </div>
  );
};

export default App;

