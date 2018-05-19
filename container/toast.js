
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function showToast() {
  Toast.info('这是一个 toast 提示!!!', 1);
}

function showToastNoMask() {
  Toast.info('无 mask 的 toast !!!', 2, null, false);
}

function successToast() {
  Toast.success('加载成功', 100);
}

function failToast() {
  Toast.fail('加载失败', 1);
}

function offline() {
  Toast.offline('网络连接失败', 1);
}

function loadingToast() {
  Toast.loading('加载中...', 1, () => {
    console.log('加载完成!!!');
  });
}

export const ToastExample = () => (
  <WingBlank>
    <WhiteSpace />
    <Button onClick={showToast}>纯文字 toast</Button>
    <WhiteSpace />
    <Button onClick={showToastNoMask}>无 mask</Button>
    <WhiteSpace />
    <Button onClick={successToast}>成功 toast</Button>
    <WhiteSpace />
    <Button onClick={failToast}>失败 toast</Button>
    <WhiteSpace />
    <Button onClick={offline}>网络 toast</Button>
    <WhiteSpace />
    <Button onClick={loadingToast}>加载中 toast</Button>
    <WhiteSpace />
  </WingBlank>
);
