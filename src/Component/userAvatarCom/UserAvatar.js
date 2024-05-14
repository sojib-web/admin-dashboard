const UserAvatar = (props) => {
  return (
    <div className={`userImag ${props.lg === true && "lg"}`}>
      <span className="rounded-circle">
        <img src={props.img} alt="" />
      </span>
    </div>
  );
};

export default UserAvatar;
