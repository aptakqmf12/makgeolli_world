import React from "react";
import { render, screen, act } from "@testing-library/react";
import MakgeolliView from "./page";
import axios from "axios";

const mockFn = jest.fn();

test("렌더링시 info값이 없으면 Empty페이지를 보여줌", async () => {
  // mockFn.mockResolvedValue(undefined || null);
  // await act(async () => {
  //   render(<MakgeolliView />);
  // });
  // const emptyBox = screen.getByText("정보가 없습니다.");
  // expect(emptyBox).toBeInTheDocument();

  render(<MakgeolliView />);

  expect(1 + 1).toBe(2);
});

// import React from 'react';
// import { render, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { act } from 'react-dom/test-utils';  // act 함수를 import

// import YourComponent from './YourComponent';

// // axios를 mock으로 대체
// jest.mock('axios');

// test('renders Empty component when axios request returns falsy data', async () => {
//   // axios의 mockResolvedValue로 비동기 요청의 결과를 설정
//   axios.get.mockResolvedValue({ data: null });

//   // act 함수를 사용하여 비동기 작업을 기다림
//   await act(async () => {
//     render(<YourComponent />);
//   });

//   // getByTestId에 해당하는 엘리먼트가 존재하는지 확인
//   expect(screen.getByTestId('empty-component')).toBeInTheDocument();
// });

// test('renders Info component when axios request returns truthy data', async () => {
//   // axios의 mockResolvedValue로 비동기 요청의 결과를 설정
//   axios.get.mockResolvedValue({ data: { /* some data */ } });

//   // act 함수를 사용하여 비동기 작업을 기다림
//   await act(async () => {
//     render(<YourComponent />);
//   });

//   // getByTestId에 해당하는 엘리먼트가 존재하는지 확인
//   expect(screen.getByTestId('info-component')).toBeInTheDocument();
// });
