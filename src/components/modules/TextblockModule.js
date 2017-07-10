export const TextblockModule = ({resources, text}) => (
  <div>
    <img src={resources[0]} alt=""/>
    <div>
      <p>
        {text}
      </p>
    </div>
  </div>
);
