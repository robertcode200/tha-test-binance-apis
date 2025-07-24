# Test Binance Apis

## 0. How to start.
- `npm run dev`

---

## 1. Features
### 1.1. Main Page
- Main page have massive currency pairs, information from the Binance RESTful API, within card design.
- User can drill down any pairs to see the k-line in a time interval.
### 1.2. Pair Detail Page
- User can see the diagram update along with time interval changed.
### 1.3. Others
- ${{\color{red}{\textsf{  Infinite\ scroll\ on\ Main\ Page\ for\ the\ pair\ cards. \}}}}\$
- ${{\color{red}{\textsf{  Throttle on the infinite\ scroll. \}}}}\$
- ${{\color{red}{\textsf{  Cache the data in useFetchData majorly for fetching the kline data of different intervals. \}}}}\$
  - i.e.  If you've fetched [BNBETH.klines.1w], and then you switch to the interval 1d,  and later when you switch back to 1w, you don't need to fetch the data again.

---

## 2. The time I spent in this quiz.
- ![image](https://github.com/user-attachments/assets/9f8ac213-46c9-4a0c-bb54-0271aca950e2)
- ![image](https://github.com/user-attachments/assets/be8b743e-0278-4ea0-91a8-e40b3d434479)
- ![image](https://github.com/user-attachments/assets/a802941a-473c-4875-bad5-a34de0a22373)
- ![image](https://github.com/user-attachments/assets/2bcb658f-9131-4ce7-846f-1a9a08e89b05)
