import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

import "./style.scss";

export default function Publication() {
  const history = useHistory();
  const data = useSelector((state) => {
    return state.homeReducer.data;
  });
  useEffect(() => {
    if (!data) {
      history.push("/");
    }
  }, [data, history]);

  return (
    <div>
      {data && data.data && (
        <div className="container publication-view">
          <h1>{data.data.title}</h1>
          <div>
            <span className="text-default"> {data.author.name}</span> -{" "}
            <small className="time-light">
              {moment(data.data.metadata.publishedAt).format(
                "DD/MM/YYYY HH:mm"
              )}
            </small>
          </div>

          <p>{data.data.body}</p>
        </div>
      )}
    </div>
  );
}
