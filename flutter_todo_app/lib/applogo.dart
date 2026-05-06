import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class CommonLogo extends StatelessWidget {
  const CommonLogo({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
       Image.network(
  "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  width: 100,
  errorBuilder: (context, error, stackTrace) {
    return const Icon(Icons.checklist, size: 100, color: Colors.white);
  },
),
        "To-Do App".text.xl2.italic.make(),
        "Make A List of your task".text.light.white.wider.lg.make(),
      ],
    );
  }
}