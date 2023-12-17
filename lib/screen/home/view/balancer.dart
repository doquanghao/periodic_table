import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class Balancer extends StatefulWidget {
  const Balancer({Key? key}) : super(key: key);

  State<Balancer> createState() => _BalancerState();
}

class _BalancerState extends State<Balancer> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(body:  InAppWebView(
      initialFile: "assets/Balancer/input.html",
    ),);
  }
}
