import 'package:flutter/material.dart';

void main() {
  runApp(MyPortfolio());
}

class MyPortfolio extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Moje Portfolio',
      home: PortfolioScreen(),
    );
  }
}

class PortfolioScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Moje Portfolio'),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            CircleAvatar(
              radius: 80.0,
              backgroundImage: AssetImage('assets/my_photo.jpg'),
            ),
            SizedBox(height: 16.0),
            Text(
              'Imię Nazwisko',
              style: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8.0),
            Text(
              'Krótkie streszczenie informacji o sobie.',
              style: TextStyle(fontSize: 16.0),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 24.0),
            ElevatedButton(
              onPressed: () {
                // Dodaj funkcjonalność przycisku GitHub
              },
              child: Text('GitHub'),
            ),
            SizedBox(height: 8.0),
            ElevatedButton(
              onPressed: () {
                // Dodaj funkcjonalność przycisku GitLab
              },
              child: Text('GitLab'),
            ),
            SizedBox(height: 8.0),
            ElevatedButton(
              onPressed: () {
                // Dodaj funkcjonalność przycisku Mail
              },
              child: Text('Mail'),
            ),
          ],
        ),
      ),
    );
  }
}
