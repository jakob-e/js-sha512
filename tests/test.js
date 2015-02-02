describe('sha512', function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512('')).to.be('cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e');
        expect(sha512('The quick brown fox jumps over the lazy dog')).to.be('07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6');
        expect(sha512('The quick brown fox jumps over the lazy dog.', true)).to.be('91ea1245f20d46ae9a037a989f54f1f790f0a47607eeb8a14d12890cea77a1bbc6c7ed9cf205e67b7f2b8fd4c7dfd3a7a8617e45f3c463d481c7e586c39ac1ed');
        expect(sha512('01234567801234567801234567801234567801234567801234567801234')).to.be('20caf4b6d9df9eb55dedd917bbb22ca81f1629c3877501fc33fd6d58729d7fe917dae36901fa45ea682c7660f68a4593c7594f538828ded46a1f6cf33ff97c25');
        expect(sha512('012345678012345678012345678012345678012345678012345678012345')).to.be('78a3041f566c0fa6573251dd584cf8532406cbe643e7198f093ce7f07eca1bc8852e8d25c2d50cfacb781c488a1517fba4b34c05e5c21ac3699c48328dd12c22');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('a8dedff31e3be9df6413ef5b4ecb93d62d3fbcb04297552eab5370e04afd45927854a4373037e81a50186e678d818c9ba824f4c850f3d0f02764af0252076979');
        expect(sha512('123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567')).to.be('4555ce42c2e19f9a09a34b3e40f85178c22cde939ac42de4d33ca0e08e3c6a2e531a3abd9265a72cc22a19d085eb2c468c20d6cfb022d8914b53d6a2b485b7c9');
        expect(sha512('1234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678')).to.be('8bfa769385fe4b7d4aabf304498522d5aefa5356e42e9ae5ac9fa6b00a483685586cc0fa44da3df335719cbb524b12433afda18361d70e4c584ea81a927c670c');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512('中文')).to.be('8b88efc2ebbcbdad5ac2d65af05bec57bda25e71fd5fb25bbd892057a2755fbd05d8d8491cb2946febd5b0f124ffdfbaecf7e34946353c4f1b5ab29545895468');
        expect(sha512('aécio')).to.be('e1c6925243db76985abacaf9fa85e22697f549e67f65a36c88e4046a2260990ff9eefc3402396ea8dcbe8c592d8d5671bea612156eda38d3708d394bbd17d493');
        expect(sha512('𠜎')).to.be('f3e7ee9cdf7dbb52f7edd59ce3d49868c64f2b3aceceab060b8eaaebdf9de0dae5866d660e3319c5aad426a2176cb1703efc73eb24d1a90458ceda1b7f4e3940');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一')).to.be('6cb7f6d3381a187edadb43c7cdcfbbed4d2c213a7dce8ea08fe42b9882b64e643202b4974a6db94f94650ab9173d97c58bd59f6d19d27e01aab76d8d08855c65');
        expect(sha512('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('d24af1901aaf1458f089a6eddf784ce61c3012aee0df98bdb67ad2dc6b41a3b4051d40caac524373930ae396a2dde99a9204871b40892eea3e5f3c8d46da0c3c');
      });
    });
  });
});

describe('sha384', function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha384('')).to.be('38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b');
        expect(sha384('The quick brown fox jumps over the lazy dog')).to.be('ca737f1014a48f4c0b6dd43cb177b0afd9e5169367544c494011e3317dbf9a509cb1e5dc1e85a941bbee3d7f2afbc9b1');
        expect(sha384('The quick brown fox jumps over the lazy dog.', true)).to.be('ed892481d8272ca6df370bf706e4d7bc1b5739fa2177aae6c50e946678718fc67a7af2819a021c2fc34e91bdb63409d7');
        expect(sha384('01234567801234567801234567801234567801234567801234567801234')).to.be('1a5b170da97d4042ae4759f0b8966a3007d8d1132e1881785bd8ac1b07b5f6dc427fc6bdf14104305abb8cafb071625f');
        expect(sha384('012345678012345678012345678012345678012345678012345678012345')).to.be('c285661ebb1b808a8e6dc3f4c5252bb3cd2b2d74cffa91ad0b7009402a088b9032476320791398ab438bfd66ec3e90c8');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha384('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('3ab853dee5785c19346e8578d9cdb3b7258a8212c15fdf25d3055b4fbbc892a529e552788992fdae68dfa34f13f0af4e');
        expect(sha384('123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567')).to.be('e4c83d6e5e18b4391a0b2e5fab84234ce9fc1071d87a9dcf38ca050ca3635781ef1d65ad4f9a835df26d186384105eac');
        expect(sha384('1234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678')).to.be('d7f6874057808f9e2eaa4eddace032c7bd548fbe3989be6591910277a25dee5972e1297deced3ad7b4e3040de88855f6');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha384('中文')).to.be('93422ceb8291a69b22f02dc1114c39a287493ad525dcebc77e4019a44eaee2633a85d0f29cd298ee6799048c33a4be0c');
        expect(sha384('aécio')).to.be('a2146805faafc45b0055b49386768811c803ef9fa8a85b648e114276c1bf49ef1092ec1bc2d3f7e036238a97eace2087');
        expect(sha384('𠜎')).to.be('e929475cf9b4d73e2a2366146381ac779b17499c92ddf910e028eb9f30280878a2843643ed8a539af5dffed64143b93d');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha384('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一')).to.be('143f4bb1a89e576ea05bd8433a3903352c199bf6ef35bfa30afa1505d6fcef77476d1b1824105da160a5164b7c792328');
        expect(sha384('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('432a8d25efb1a8d463acc7bbbed57365cddc72de3cc19d42e1d260b1479770ecea9dd403fead2949d4fabb36939f263a');
      });
    });
  });
});

describe('sha512/256', function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_256('')).to.be('c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a');
        expect(sha512_256('The quick brown fox jumps over the lazy dog')).to.be('dd9d67b371519c339ed8dbd25af90e976a1eeefd4ad3d889005e532fc5bef04d');
        expect(sha512_256('The quick brown fox jumps over the lazy dog.', true)).to.be('1546741840f8a492b959d9b8b2344b9b0eb51b004bba35c0aebaac86d45264c3');
        expect(sha512_256('01234567801234567801234567801234567801234567801234567801234')).to.be('e137e353ba2d34a94341dbb8d69ed1f2eefb1f045ff48f5b61272be51dc4bb61');
        expect(sha512_256('012345678012345678012345678012345678012345678012345678012345')).to.be('a5dcc9632aba17ce3c38de2c9674b75389931bfb6dc4836f8c31643013e0cd7d');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_256('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('21e2e940930b23f1de6377086d07e22033c6bbf3fd9fbf4b62ec66e6c08c25be');
        expect(sha512_256('123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567')).to.be('44da7ca023996ec4b4ded88410e4acc209ca26c34dc0f26550d28503974fe2d1');
        expect(sha512_256('1234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678')).to.be('465859c0edc706a2a9c39d3175a715fdf6b764ccc43d45b5668c56f6d8aa9b9e');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_256('中文')).to.be('b6dab29c16ec35ab34a5d92ff135b58de96741dda78b1009a2181cf8b45d2f72');
        expect(sha512_256('aécio')).to.be('122802ca08e39c2ef46f6a81379dc5683bd8aa074dfb54259f0add4d8b5504bc');
        expect(sha512_256('𠜎')).to.be('1032308151c0f4f5f8d4e0d96956352eb8ff87da98df8878d8795a858a7e7c08');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_256('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一')).to.be('d32a41d9858e45b68402f77cf9f3c3f992c36a4bffd230f78d666c87f97eaf7e');
        expect(sha512_256('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('bd1abad59e6b8ad69bc17b6e05aa13f0cb725467fbeb45b83d3e4094332d1367');
      });
    });
  });
});

describe('sha512/224', function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_224('')).to.be('6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4');
        expect(sha512_224('The quick brown fox jumps over the lazy dog')).to.be('944cd2847fb54558d4775db0485a50003111c8e5daa63fe722c6aa37');
        expect(sha512_224('The quick brown fox jumps over the lazy dog.', true)).to.be('6d6a9279495ec4061769752e7ff9c68b6b0b3c5a281b7917ce0572de');
        expect(sha512_224('01234567801234567801234567801234567801234567801234567801234')).to.be('1dfaaf5806ec0ceba60da809c2b4151e5dc5081c6a346e504ea556ea');
        expect(sha512_224('012345678012345678012345678012345678012345678012345678012345')).to.be('10dced83a53416883dbd7ace74955bb3d42de0b65b2087b902537c91');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_224('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('2e962464977b198ee758d615bbc92251ad2e3c0960068e279fd21d2f');
        expect(sha512_224('123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567')).to.be('1d60954ce7bee0bf5d235fe6bfc928c0f32c0f1c4992451dbc0f4dbf');
        expect(sha512_224('1234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678')).to.be('672aef84d579799cedf2fec090ce4ea0d72e0edd2788deaa8200fd67');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_224('中文')).to.be('0f46a0ae7f226517dd66ece0ce1efa29ffb7ced05ac4566fdcaed188');
        expect(sha512_224('aécio')).to.be('562f2e4ee7f7451d20dcc6a0ac1a1e1c4a75f09baaf1cf19af3e15f4');
        expect(sha512_224('𠜎')).to.be('0533318c52b3d4ad355c2a6c7e727ae3d2efa749db480ac33560b059');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_224('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一')).to.be('f67e191a5d4ee67a272ccaf6cf597f0c4d6a0c46bd631be7cadb0944');
        expect(sha512_224('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('009c3d1e3172d6df71344982eada855421592aea28acbf660ada7569');
      });
    });
  });
});
