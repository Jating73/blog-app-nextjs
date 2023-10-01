---
title: "Cracking the Code: Interview Questions at Top Tech Companies"
date: "2023-10-01"
image: coding-interview-questions.jpg
excerpt: Prepare for your tech interviews with these coding questions from leading companies like Google, Facebook, Amazon, and more.
isFeatured: false
---

The tech interview process can be daunting, especially when you're aiming for a job at one of the leading tech companies. To help you prepare and succeed, I've compiled a list of coding questions commonly asked during interviews at top tech giants like Google, Facebook, Amazon, and others. Let's dive into some of these challenging coding problems.

![Cracking the Code](coding-interview-questions.jpg)

## Infosys

### Question 1

**Problem Statement:** 

In each cell of a grid of size N*N, there is either a hunter or a deer. A hunter can hunt a deer only if both are in same row and every hunter can hunt only one deer. The hunter cannot hunt a deer which is more than K units away from him. Your goal is to find the maximum number of deer than can be caught in the grid.

**Input Format:**

First Line has T - the number of test cases.

The first line will be followed by T sets of data each set with following-
- One line containing two integers N and K separated by space
- N liness each N character separated by spaces. The N characters denote the occupant of each cell of the grid. The characters will be either H(denoting Hunter) or D(denoting Deer)

**Output Format:**

T lines containing the maximum number of deer that can be hunted for each test cases

**Constraints:**

- 1 <= T <= 10
- 1 <= N <= 1000
- 1 <= K <= N*N

**Sample Input:**

1  
3 1  
H D H  
D H D  
D D H  

**Sample Output:**

3

**Solution:**

```cpp
#include <iostream>
#include <vector>

using namespace std;

int maxDeerHunted(int N, int K, vector<vector<char>>& grid) {
    int maxDeerCount = 0;

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (grid[i][j] == 'H') {
                int deerCount = 0;

                for (int k = j - K; k <= j + K; k++) {
                    if (k >= 0 && k < N && grid[i][k] == 'D') {
                        deerCount++;
                        grid[i][k] = 'X'; // Mark the hunted deer as 'X'
                        break; // Each hunter can only hunt one deer
                    }
                }
                maxDeerCount += deerCount;
            }
        }
    }

    return maxDeerCount;
}

int main() {
    int T;
    cin >> T;

    for (int t = 0; t < T; t++) {
        int N, K;
        cin >> N >> K;

        vector<vector<char>> grid(N, vector<char>(N));
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                cin >> grid[i][j];
            }
        }

        // Calculate and print the maximum number of hunted deer for the current test case
        cout << maxDeerHunted(N, K, grid) << endl;
    }

    return 0;
}
```

