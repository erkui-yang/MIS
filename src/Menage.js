import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";

class Menage extends Component {
  state = {
    info: {
      num: "",
      name: "",
      age: "",
      sex: "",
      total: "",
      avg: "",
      ys: "",
      wy: "",
      ss: "",
    },
    searchNum: "",
  };

  onSearchNum(e) {
    this.setState({
      searchNum: e.target.value,
    });
  }

  queryNumInfo() {
    const { searchNum } = this.state;
    if (!searchNum) {
      alert("请输入准考证号");
      return;
    }
    this.query(null, searchNum);
  }

  query(_, searchNum) {
    fetch(
      `http://yapi.s2.hahhub.com/mock/13/album/searchNum?searchNum=${searchNum}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res.code === 200) {
          this.setState({
            info: res.data,
          });
        } else {
          window.confirm(res && res.msg ? res.msg : "获取数据失败");
        }
      });
  }

  logoutHandle() {
    fetch("http://yapi.s2.hahhub.com/mock/13/album/users/logout")
      .then((res) => res.json())
      .then((res) => {
        this.props.history.push("/");
      });
  }

  render() {
    const { info, searchNum } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <h2>考生成绩管理</h2>
          </div>
          <div>
            <div>
              <div className="text">
                <span>准考证号</span>
                <input value={info.num} readOnly />
                <span>考生姓名</span>
                <input value={info.name} readOnly />
              </div>
              <div className="text">
                <span>考生性别</span>
                <input value={info.sex} readOnly />
                <span>考生年龄</span>
                <input value={info.age} readOnly />
              </div>
              <div className="text">
                <span>总分</span>
                <input value={info.total} readOnly />
                <span>平均分</span>
                <input value={info.avg} readOnly />
              </div>
              <div className="number">
                <span>语文成绩</span>
                <input value={info.ys} readOnly />
                <span>数学成绩</span>
                <input value={info.ss} readOnly />
                <span>外语成绩</span>
                <input value={info.wy} readOnly />
              </div>
            </div>
            <div className="top">
              <span>再次输入所查询考生的准考证号</span>
              <input value={searchNum} onChange={this.onSearchNum.bind(this)} />
            </div>
          </div>
          <div className="buttom">
            <input
              type="button"
              value="第一条"
              onClick={this.query.bind(this)}
            />
            <input
              type="button"
              value="上一条"
              onClick={this.query.bind(this)}
            />
            <input
              type="button"
              value="下一条"
              onClick={this.query.bind(this)}
            />
            <input
              type="button"
              value="末一条"
              onClick={this.query.bind(this)}
            />
            <input type="button" value="追加记录" />
            <input type="button" value="删除记录" />
            <input
              type="button"
              value="查询"
              onClick={this.queryNumInfo.bind(this)}
            />
            <input type="button" value="统计" />
            <input
              type="button"
              value="退出"
              onClick={this.logoutHandle.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menage);
