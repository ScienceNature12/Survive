#include <iostream>
#include <string>
using namespace std;

int main()
{
    string choice1; 
    string choice2; 
    string choice3;
    string choice4;

    cout << "Welcome to the island.Try to get back to the castle on the mainland." << endl;


    cout << "How do you want to get back to land? Type Explore or Swim?" << endl;
    cin >> choice1;
    
    if (choice1 == "explore") {
        cout << "You have found a boat. There seems to be a way off the island. Type wait to 'wait' for a captain or type 'drive' to leave yourself" << endl;
        cin >> choice2;

        if (choice2 == "drive") {
            cout << "You arrive at the mainland to find a fork in thr road. Do you go left or right? Type 'Left' to go left or type 'Right' to go right" << endl;
            cin >> choice3;

            if (choice3 == "Left") {
                cout << "You arrive at another fork in the road. Do you go left or right? Type 'Left' to go left or type 'Right' to go right" << endl;
                cin >> choice4;

                if (choice4 == "Right") {
                    cout << "You have found the castle and won the game. CONGRADULATIONS!" << endl;
                }
                else {
                    cout << "You were attacked be a swarm of angry bees and had an allergic reaction. You died. Game over" << endl;
                }
            }

            else {
                cout << "You were attacked by a pack of angry Trash Pandas and died. Game Over" << endl;
            }
        }

        else {
            cout << "The captain has pulled a machete on you and you died. Game over" << endl;

        }
    }
    else {
        cout << "You were eaten by a shark. Game over" << endl; 
    }
    
    return 0;
}
