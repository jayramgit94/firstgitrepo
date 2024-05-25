#include <iostream>
using namespace std;

int main(){
  int m = 1;
  int number;
  int result = 0;

  cout<<"Enter a number: ";
  cin>>number;

  cout<< "Table of " << result << endl;

  
  while(m<= 10){
    int result = number*m;
    cout<<result<<'\n';
    m++;
  }
  return 0;
    
}
