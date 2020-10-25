import React from "react";
import {addNews, changeNews} from "../../../services/news";
import { connect } from "react-redux";

const AddNews = ({selectedNews, dispatch}) => {
    const initialValues = {
        title: "",
        lead: "",
        text: ""
    }
    const [values, setValues] = React.useState({...initialValues});

    React.useEffect (() => {
            if (Object.keys(selectedNews).length) {
                if (selectedNews.id !== values.id) {
                    setValues({...selectedNews})
                }
            }
            else {
                setValues({...initialValues});
            }
        },
        [selectedNews])

    const onChange = (e) => {
        const target = e.target;
        setValues((prev) => ({
            ...prev,
            [target.name]: target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(selectedNews).length) {
            dispatch(changeNews(values));
        }
        else {
            dispatch(addNews(values));
        }
        if (selectedNews) {
            dispatch({type: "news/selectNews", payload: {}});
        }
        setValues({...initialValues});
    };

    const onClear = (e) => {
        e.preventDefault();
        if (selectedNews) {
            dispatch({type: "news/selectNews", payload: {}});
        }
        setValues({...initialValues});
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
                <label className="d-block">
                    Title
                    <input
                        onChange={onChange}
                        name = {"title"}
                        value = {values.title}
                        type="text"
                        className="form-control"
                        placeholder="News title"
                    />
                </label>
            </div>
            <div className="form-group mb-3">
                <label className="d-block">
                    Lead
                    <input
                        onChange={onChange}
                        name = {"lead"}
                        value = {values.lead}
                        type="text"
                        className="form-control"
                        placeholder="News lead"
                    />
                </label>
            </div>
            <div className="form-group mb-3">
                <label className="d-block">
                    Text
                    <textarea
                        onChange={onChange}
                        name = {"text"}
                        value = {values.text}
                        className="form-control"
                        placeholder="News text"
                    />
                </label>
            </div>
            <div className="btn-group">
                <button
                    disabled={!(values.title || values.text || values.lead)}
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={onClear}
                >
                    Reset
                </button>
                <button
                    disabled={!(values.title && values.text && values.lead)}
                    type="submit"
                    className="btn btn-outline-success"
                >
                    {Object.keys(selectedNews).length ? "Change" : "Add"}
                </button>
            </div>
        </form>
        );
}
const mapStateToProps = (state) => {
    return {
        selectedNews: state.news.selectedNews,
    };
};

export default connect(mapStateToProps)(AddNews);
