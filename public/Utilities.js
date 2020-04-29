import React from "react";

export class Radio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, value, label} = this.props;
    return (
      <div>
        <label>
          <input type="radio" name={name} value={value} />
          {label}
        </label>
      </div>
    );
  }
}

